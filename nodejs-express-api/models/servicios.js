
const BaseModel = require("./basemodel");
class Servicios extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				titulo: {name: 'titulo', type:Sequelize.STRING},
				descripcion: {name: 'descripcion', type:Sequelize.STRING},
				imagen: {name: 'imagen', type:Sequelize.STRING},
				icono: {name: 'icono', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "servicios",
				modelName: "servicios",
			}
		);
	}
	
	static listFields() {
		
		return [
			'id', 
			'titulo', 
			'descripcion', 
			'imagen', 
			'icono'
		];
	}

	static viewFields() {
		
		return [
			'id', 
			'titulo', 
			'descripcion', 
			'imagen', 
			'icono'
		];
	}

	static editFields() {
		
		return [
			'titulo', 
			'descripcion', 
			'imagen', 
			'icono', 
			'id'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("titulo LIKE :search"), 
			sequelize.literal("descripcion LIKE :search"),
		];
	}

	
	
}
module.exports = Servicios;
