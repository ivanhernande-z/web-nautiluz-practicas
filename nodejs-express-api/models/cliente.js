
const BaseModel = require("./basemodel");
class Cliente extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nombre: {name: 'nombre', type:Sequelize.STRING},
				opinion: {name: 'opinion', type:Sequelize.STRING},
				descripcion: {name: 'descripcion', type:Sequelize.STRING},
				foto: {name: 'foto', type:Sequelize.STRING}
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
			'opinion', 
			'descripcion', 
			'foto', 
			'id'
		];
	}

	static viewFields() {
		
		return [
			'nombre', 
			'opinion', 
			'descripcion', 
			'foto', 
			'id'
		];
	}

	static editFields() {
		
		return [
			'nombre', 
			'opinion', 
			'descripcion', 
			'foto', 
			'id'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("nombre LIKE :search"), 
			sequelize.literal("opinion LIKE :search"), 
			sequelize.literal("descripcion LIKE :search"), 
			sequelize.literal("foto LIKE :search"),
		];
	}

	
	
}
module.exports = Cliente;
