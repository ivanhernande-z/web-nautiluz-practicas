
const BaseModel = require("./basemodel");
class Cliente extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nombre: {name: 'nombre', type:Sequelize.STRING},
				empresa: {name: 'empresa', type:Sequelize.STRING},
				tipo: {name: 'tipo', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "cliente",
				modelName: "cliente",
			}
		);
	}
	
	static listFields() {
		
		return [
			'nombre', 
			'empresa', 
			'tipo', 
			'id'
		];
	}

	static viewFields() {
		
		return [
			'id', 
			'nombre', 
			'empresa', 
			'tipo'
		];
	}

	static editFields() {
		
		return [
			'nombre', 
			'empresa', 
			'tipo', 
			'id'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("nombre LIKE :search"), 
			sequelize.literal("empresa LIKE :search"), 
			sequelize.literal("tipo LIKE :search"),
		];
	}

	
	
}
module.exports = Cliente;
