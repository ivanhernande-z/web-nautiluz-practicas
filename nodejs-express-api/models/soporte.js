
const BaseModel = require("./basemodel");
class Soporte extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nombre: {name: 'nombre', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "soporte",
				modelName: "soporte",
			}
		);
	}
	
	static listFields() {
		
		return [
			'id', 
			'nombre'
		];
	}

	static viewFields() {
		
		return [
			'id', 
			'nombre'
		];
	}

	static editFields() {
		
		return [
			'id', 
			'nombre'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("nombre LIKE :search"),
		];
	}

	
	
}
module.exports = Soporte;
