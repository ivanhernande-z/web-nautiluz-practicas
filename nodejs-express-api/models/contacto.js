
const BaseModel = require("./basemodel");
class Contacto extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				nombre: {name: 'nombre', type:Sequelize.STRING},
				correo: {name: 'correo', type:Sequelize.STRING},
				asunto: {name: 'asunto', type:Sequelize.STRING},
				numero: {name: 'numero', type:Sequelize.INTEGER},
				descripcion: {name: 'descripcion', type:Sequelize.STRING}
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
			'nombre', 
			'correo', 
			'asunto', 
			'numero', 
			'descripcion', 
			'id'
		];
	}

	static viewFields() {
		
		return [
			'id', 
			'nombre', 
			'correo', 
			'asunto', 
			'numero', 
			'descripcion'
		];
	}

	static editFields() {
		
		return [
			'id', 
			'nombre', 
			'correo', 
			'asunto', 
			'numero', 
			'descripcion'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("nombre LIKE :search"), 
			sequelize.literal("correo LIKE :search"), 
			sequelize.literal("asunto LIKE :search"), 
			sequelize.literal("descripcion LIKE :search"),
		];
	}

	
	
}
module.exports = Contacto;
