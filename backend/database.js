const { Sequelize } = require("sequelize");

require("doten").config();

const Sequelize = new Sequelize(
    process.env.DB_NAME,
    process.env.BA_USER,
    process.env.DB_PASS,
    {
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        dialect: "postgres",
        loggin: false,
    }
)

module.exports = Sequelize;




