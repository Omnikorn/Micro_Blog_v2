const { Model, DataTypes, Sequelize } = require("sequelize")
const sequelize = require("../config/connection.js")
const bcrypt = require("bcrypt")


class User extends Model {}

User.init(
	{
		id: {
			type: DataTypes.INTEGER,
			allowNull: false,
			primaryKey: true,
			autoIncrement: true,
		},
		user_name: {
			type: DataTypes.STRING,
			allowNull: false,
		},
		user_password: {
			type: DataTypes.STRING,
			allowNull: false,
		},

		user_email: {
			type: DataTypes.STRING,
			allowNull: false,
			unique: true,
			validate: {
				isEmail: true,
			},
		},
	},
	

	{
		sequelize,
		timestamps: true,
		freezeTableName: true,
		underscored: true,
		modelName: "user",
	}
)

module.exports = User
