const Sequelize = require("sequelize");
const connection = require("../database/database");

const User = connection.define("users", {
    email:{
        type: Sequelize.STRING,
        allowNull: false
    }, password: {
        type: Sequelize.STRING,
        allowNull: false
    }
});

//User.sync({force: false}); //comentado para não ficar recriando esta tabela

module.exports = User;