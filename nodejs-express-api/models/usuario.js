
const BaseModel = require("./basemodel");
class Usuario extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nombre: {name: 'nombre', type:Sequelize.STRING},
				contrasenia: {name: 'contrasenia', type:Sequelize.STRING},
				email: {name: 'email', type:Sequelize.STRING},
				telefono: {name: 'telefono', type:Sequelize.STRING},
				foto: {name: 'foto', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "usuario",
				modelName: "usuario",
			}
		);
	}
	
	static listFields() {
		
		return [
			'nombre', 
			'email', 
			'telefono', 
			'foto', 
			'id'
		];
	}

	static viewFields() {
		
		return [
			'nombre', 
			'email', 
			'telefono', 
			'id'
		];
	}

	static accounteditFields() {
		
		return [
			'id', 
			'nombre', 
			'telefono', 
			'foto'
		];
	}

	static accountviewFields() {
		
		return [
			'id', 
			'nombre', 
			'email', 
			'telefono'
		];
	}

	static editFields() {
		
		return [
			'nombre', 
			'telefono', 
			'foto', 
			'id'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("nombre LIKE :search"), 
			sequelize.literal("email LIKE :search"), 
			sequelize.literal("telefono LIKE :search"),
		];
	}

	
	
}
module.exports = Usuario;
