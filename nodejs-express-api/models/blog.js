
const BaseModel = require("./basemodel");
class Blog extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				articulo: {name: 'articulo', type:Sequelize.STRING},
				destacado: {name: 'destacado', type:Sequelize.STRING},
				contenido: {name: 'contenido', type:Sequelize.STRING},
				pie: {name: 'pie', type:Sequelize.STRING},
				autor: {name: 'autor', type:Sequelize.STRING}
			}, 
			{ 
				sequelize,
				
				tableName: "blog",
				modelName: "blog",
			}
		);
	}
	
	static listFields() {
		
		return [
			'articulo', 
			'destacado', 
			'contenido', 
			'pie', 
			'id', 
			'autor'
		];
	}

	static viewFields() {
		
		return [
			'id', 
			'articulo', 
			'destacado', 
			'contenido', 
			'pie', 
			'autor'
		];
	}

	static editFields() {
		
		return [
			'articulo', 
			'destacado', 
			'id', 
			'contenido', 
			'pie', 
			'autor'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("articulo LIKE :search"), 
			sequelize.literal("destacado LIKE :search"), 
			sequelize.literal("contenido LIKE :search"), 
			sequelize.literal("pie LIKE :search"), 
			sequelize.literal("autor LIKE :search"),
		];
	}

	
	
}
module.exports = Blog;
