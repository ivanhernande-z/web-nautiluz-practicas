const express = require('express');
const router = express.Router();
const utils = require('../helpers/utils');
const { body, validationResult, matchedData } = require('express-validator');
const DB = require('../models/index.js');
const Blog = DB.Blog;


const sequelize = DB.sequelize; // sequelize query functions
const Op = DB.Op; // sequelize query operators
const filterBy = DB.filterBy; // sequelize where condtion




/**
 * Route to list blog records
 * @route {GET} /blog/index/{fieldname}/{fieldvalue}
 */
router.get(['/', '/index/:fieldname?/:fieldvalue?'], async (req, res) => {  
	try{
		let query = {};  // sequelize query object
		let queryFilters = [];
		let where = {};  // sequelize where conditions
		let replacements = {};  // sequelize query params
		let fieldName = req.params.fieldname;
		let fieldValue = req.params.fieldvalue;
		
		if (fieldName){
			queryFilters.push(filterBy(fieldName, fieldValue));
		}
		let search = req.query.search;
		if(search){
			let searchFields = Blog.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		if(queryFilters.length){
			where[Op.and] = queryFilters;
		}
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Blog.getOrderBy(req, 'desc');
		query.attributes = Blog.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 10;
		let result = await Blog.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Blog record
 * @route {GET} /blog/view/{recid}
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		const recid = req.params.recid || null;
		const query = {}
		const where = {}
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Blog.viewFields();
		let record = await Blog.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to insert Blog record
 * @route {POST} /blog/add
 */
router.post('/add/' , 
	[
		body('articulo').optional({nullable: true, checkFalsy: true}),
		body('destacado').optional({nullable: true, checkFalsy: true}),
		body('contenido').optional({nullable: true, checkFalsy: true}),
		body('pie').optional({nullable: true, checkFalsy: true}),
		body('autor').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get validated data
		
		//save Blog record
		let record = await Blog.create(modeldata);
		//await record.reload(); //reload the record from database
		const recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Blog record for edit
 * @route {GET} /blog/edit/{recid}
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		const recid = req.params.recid;
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Blog.editFields();
		let record = await Blog.findOne(query);
		if(!record){
			return res.notFound();
		}
		return res.ok(record);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to update  Blog record
 * @route {POST} /blog/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('articulo').optional({nullable: true, checkFalsy: true}),
		body('destacado').optional({nullable: true, checkFalsy: true}),
		body('contenido').optional({nullable: true, checkFalsy: true}),
		body('pie').optional({nullable: true, checkFalsy: true}),
		body('autor').optional({nullable: true, checkFalsy: true}),
	]
, async (req, res) => {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		const recid = req.params.recid;
		let modeldata = matchedData(req, { locations: ['body'], includeOptionals: true }); // get validated data
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Blog.editFields();
		let record = await Blog.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Blog.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Blog record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /blog/delete/{recid}
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await Blog.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Blog.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
