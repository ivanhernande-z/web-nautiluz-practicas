
const BaseModel = require("./basemodel");
class Blog extends BaseModel {
	static init(sequelize, Sequelize) {
		return super.init(
			{
				
				id: { type: Sequelize.INTEGER, primaryKey: true , autoIncrement: true },
				articulo: {name: 'articulo', type:Sequelize.STRING},
				destacado: {name: 'destacado', type:Sequelize.STRING}
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
			'id'
		];
	}

	static viewFields() {
		
		return [
			'id', 
			'articulo', 
			'destacado'
		];
	}

	static editFields() {
		
		return [
			'articulo', 
			'destacado', 
			'id'
		];
	}

	
	static searchFields(){
		const sequelize = this.sequelize;
		return [
			sequelize.literal("articulo LIKE :search"), 
			sequelize.literal("destacado LIKE :search"),
		];
	}

	
	
}
module.exports = Blog;
