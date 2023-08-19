const Sequelize = require("sequelize");
const connection = require("../database/database");
const Category = require("../categories/Category");

const Article = connection.define("articles", {
    title:{
        type: Sequelize.STRING,
        allowNull: false
    }, slug: {
        type: Sequelize.STRING,
        allowNull: false
    },
    body: {
        type: Sequelize.TEXT,
        allowNull: false
    }
});

Category.hasMany(Article); // Tem muitos / 1(categoria) --> M(artigos)
Article.belongsTo(Category); // Um artigo pertende a uma categoria / 1(artigo) --> 1(categoria)

 //Article.sync({force: true}); //comentado para não ficar recriando esta tabela

module.exports = Article;