const express = require('express');
const router = express.Router();
const utils = require('../helpers/utils');
const { body, validationResult, matchedData } = require('express-validator');
const DB = require('../models/index.js');
const Reclutamiento = DB.Reclutamiento;


const sequelize = DB.sequelize; // sequelize query functions
const Op = DB.Op; // sequelize query operators
const filterBy = DB.filterBy; // sequelize where condtion




/**
 * Route to list reclutamiento records
 * @route {GET} /reclutamiento/index/{fieldname}/{fieldvalue}
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
			let searchFields = Reclutamiento.searchFields();
			where[Op.or] = searchFields;
			replacements.search = `%${search}%`;
		}
		
		if(queryFilters.length){
			where[Op.and] = queryFilters;
		}
		query.raw = true;
		query.where = where;
		query.replacements = replacements;
		query.order = Reclutamiento.getOrderBy(req, 'desc');
		query.attributes = Reclutamiento.listFields();
		let page = parseInt(req.query.page) || 1;
		let limit = parseInt(req.query.limit) || 10;
		let result = await Reclutamiento.paginate(query, page, limit);
		return res.ok(result);
	}
	catch(err) {
		return res.serverError(err);
	}
});


/**
 * Route to view Reclutamiento record
 * @route {GET} /reclutamiento/view/{recid}
 */
router.get(['/view/:recid'], async (req, res) => {
	try{
		const recid = req.params.recid || null;
		const query = {}
		const where = {}
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Reclutamiento.viewFields();
		let record = await Reclutamiento.findOne(query);
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
 * Route to insert Reclutamiento record
 * @route {POST} /reclutamiento/add
 */
router.post('/add/' , 
	[
		body('posiciones').optional({nullable: true, checkFalsy: true}),
		body('status').optional({nullable: true, checkFalsy: true}),
		body('descripcion').optional({nullable: true, checkFalsy: true}),
		body('titulo').optional({nullable: true, checkFalsy: true}),
		body('salario').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('telefono').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('correo').optional({nullable: true, checkFalsy: true}).isEmail(),
	]
, async function (req, res) {
	try{
		let errors = validationResult(req); // get validation errors if any
		if (!errors.isEmpty()) {
			let errorMsg = utils.formatValidationError(errors.array());
			return res.badRequest(errorMsg);
		}
		let modeldata = matchedData(req, { locations: ['body'] }); // get validated data
		
		//save Reclutamiento record
		let record = await Reclutamiento.create(modeldata);
		//await record.reload(); //reload the record from database
		const recid =  record['id'];
		
		return res.ok(record);
	} catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to get  Reclutamiento record for edit
 * @route {GET} /reclutamiento/edit/{recid}
 */
router.get('/edit/:recid', async (req, res) => {
	try{
		const recid = req.params.recid;
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		query.attributes = Reclutamiento.editFields();
		let record = await Reclutamiento.findOne(query);
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
 * Route to update  Reclutamiento record
 * @route {POST} /reclutamiento/edit/{recid}
 */
router.post('/edit/:recid' , 
	[
		body('posiciones').optional({nullable: true, checkFalsy: true}),
		body('status').optional({nullable: true, checkFalsy: true}),
		body('descripcion').optional({nullable: true, checkFalsy: true}),
		body('titulo').optional({nullable: true, checkFalsy: true}),
		body('salario').optional({nullable: true, checkFalsy: true}),
		body('tipo').optional({nullable: true, checkFalsy: true}),
		body('fecha').optional({nullable: true, checkFalsy: true}),
		body('telefono').optional({nullable: true, checkFalsy: true}).isNumeric(),
		body('correo').optional({nullable: true, checkFalsy: true}).isEmail(),
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
		query.attributes = Reclutamiento.editFields();
		let record = await Reclutamiento.findOne(query);
		if(!record){
			return res.notFound();
		}
		await Reclutamiento.update(modeldata, {where: where});
		return res.ok(modeldata);
	}
	catch(err){
		return res.serverError(err);
	}
});


/**
 * Route to delete Reclutamiento record by table primary key
 * Multi delete supported by recid separated by comma(,)
 * @route {GET} /reclutamiento/delete/{recid}
 */
router.get('/delete/:recid', async (req, res) => {
	try{
		const recid = (req.params.recid || '').split(',');
		const query = {};
		const where = {};
		where['id'] = recid;
		query.raw = true;
		query.where = where;
		let records = await Reclutamiento.findAll(query);
		records.forEach(async (record) => { 
			//perform action on each record before delete
		});
		await Reclutamiento.destroy(query);
		return res.ok(recid);
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
