const express = require('express');
const router = express.Router();
const utils = require('../helpers/utils');
const { body, validationResult, matchedData } = require('express-validator');
const DB = require('../models/index.js');
const Cliente = DB.Cliente;


const sequelize = DB.sequelize; // sequelize query functions
const Op = DB.Op; // sequelize query operators
const filterBy = DB.filterBy; // sequelize where condtion




/**
 * Route to list cliente records
 * @route {GET} /cliente/index/{fieldname}/{fieldvalue}
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
			let searchFields = Cliente.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		if(queryFilters.length){
			where[Op.and] = queryFilters;
		}
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Cliente.getOrderBy(req, 'desc');
		query.attributes = Cliente.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 10;
		let result = await Cliente.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Cliente record
 * @route {GET} /cliente/view/{recid}
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		const recid = req.params.recid || null;
		const query = {}
		const where = {}
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Cliente.viewFields();
		let record = await Cliente.findOne(query);
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
 * Route to insert Cliente record
 * @route {POST} /cliente/add
 */
router.post('/add/' , 
	[
		body('nombre').optional({nullable: true, checkFalsy: true}),
		body('empresa').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get validated data
		
		//save Cliente record
		let record = await Cliente.create(modeldata);
		//await record.reload(); //reload the record from database
		const recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Cliente record for edit
 * @route {GET} /cliente/edit/{recid}
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		const recid = req.params.recid;
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Cliente.editFields();
		let record = await Cliente.findOne(query);
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
 * Route to update  Cliente record
 * @route {POST} /cliente/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('nombre').optional({nullable: true, checkFalsy: true}),
		body('empresa').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
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
		query.attributes = Cliente.editFields();
		let record = await Cliente.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Cliente.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Cliente record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /cliente/delete/{recid}
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await Cliente.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Cliente.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
