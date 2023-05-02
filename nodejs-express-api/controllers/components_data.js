const express = require('express');
const router = express.Router();
const DB = require('../models/index.js');
const sequelize = DB.sequelize; // sequelize query functions
const Op = DB.Op; // sequelize query operators
const filterBy = DB.filterBy; // sequelize where condtion


 /**
 * Route to check if field value already exist in a Usuario table
 * @route {GET} /components_data/usuario_nombre_exist/{fieldvalue}
 */
router.get('/usuario_nombre_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await DB.Usuario.count({ where:{ 'nombre': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});


 /**
 * Route to check if field value already exist in a Usuario table
 * @route {GET} /components_data/usuario_email_exist/{fieldvalue}
 */
router.get('/usuario_email_exist/:fieldvalue', async (req, res) => {
	try{
		let val = req.params.fieldvalue
		let count = await DB.Usuario.count({ where:{ 'email': val } });
		if(count > 0){
			return res.ok("true");
		}
		return res.ok("false");
	}
	catch(err){
		return res.serverError(err);
	}
});
module.exports = router;
