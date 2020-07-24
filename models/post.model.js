const { Sequelize, DataTypes } = require('sequelize');

const sequelize = new Sequelize('postgres://postgres:admin@localhost:5432/forum', { logging: false });

const Post = sequelize.define('post', {
	name: {
		type: DataTypes.STRING,
    	allowNull: false
	},
	description: {
		type: DataTypes.STRING(1024),
    	allowNull: false
	}
});

let syncDB = async () => await sequelize.sync({ force: true });
syncDB();

module.exports = Post;