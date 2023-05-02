
const BaseModel = require("./basemodel");
class Reclutamiento extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				posiciones: {name: 'posiciones', type:Sequelize.STRING},
				status: {name: 'status', type:Sequelize.STRING},
				descripcion: {name: 'descripcion', type:Sequelize.STRING},
				titulo: {name: 'titulo', type:Sequelize.STRING},
				salario: {name: 'salario', type:Sequelize.STRING},
				tipo: {name: 'tipo', type:Sequelize.STRING},
				fecha: {name: 'fecha', type:Sequelize.DATEONLY},
				telefono: {name: 'telefono', type:Sequelize.INTEGER},
				correo: {name: 'correo', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "reclutamiento",
				modelName: "reclutamiento",
			}
		);
	}
	
	static listFields() {
		
		return [
			'posiciones', 
			'status', 
			'descripcion', 
			'titulo', 
			'salario', 
			'tipo', 
			'fecha', 
			'telefono', 
			'correo', 
			'id'
		];
	}

	static viewFields() {
		
		return [
			'posiciones', 
			'status', 
			'descripcion', 
			'titulo', 
			'salario', 
			'tipo', 
			'fecha', 
			'telefono', 
			'correo', 
			'id'
		];
	}

	static editFields() {
		
		return [
			'posiciones', 
			'status', 
			'descripcion', 
			'titulo', 
			'salario', 
			'tipo', 
			'fecha', 
			'telefono', 
			'correo', 
			'id'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("posiciones LIKE :search"), 
			sequelize.literal("status LIKE :search"), 
			sequelize.literal("descripcion LIKE :search"), 
			sequelize.literal("titulo LIKE :search"), 
			sequelize.literal("salario LIKE :search"), 
			sequelize.literal("tipo LIKE :search"), 
			sequelize.literal("correo LIKE :search"),
		];
	}

	
	
}
module.exports = Reclutamiento;
