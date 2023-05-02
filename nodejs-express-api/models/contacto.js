
const BaseModel = require("./basemodel");
class Contacto extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				form: {name: 'form', type:Sequelize.STRING},
				whatsapp: {name: 'whatsapp', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "contacto",
				modelName: "contacto",
			}
		);
	}
	
	static listFields() {
		
		return [
			'form', 
			'whatsapp', 
			'id'
		];
	}

	static viewFields() {
		
		return [
			'id', 
			'form', 
			'whatsapp'
		];
	}

	static editFields() {
		
		return [
			'form', 
			'whatsapp', 
			'id'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("form LIKE :search"), 
			sequelize.literal("whatsapp LIKE :search"),
		];
	}

	
	
}
module.exports = Contacto;
