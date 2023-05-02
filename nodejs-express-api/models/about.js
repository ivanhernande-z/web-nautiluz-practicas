
const BaseModel = require("./basemodel");
class About extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nombre: {name: 'nombre', type:Sequelize.STRING},
				descripcion: {name: 'descripcion', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "about",
				modelName: "about",
			}
		);
	}
	
	static listFields() {
		
		return [
			'nombre', 
			'descripcion', 
			'id'
		];
	}

	static viewFields() {
		
		return [
			'nombre', 
			'descripcion', 
			'id'
		];
	}

	static editFields() {
		
		return [
			'nombre', 
			'descripcion', 
			'id'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("nombre LIKE :search"), 
			sequelize.literal("descripcion LIKE :search"),
		];
	}

	
	
}
module.exports = About;
