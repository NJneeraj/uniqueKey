const { Sequelize } = require("sequelize");

const config = {
  database: "your database name",
  username: "your username", // Your PostgreSQL username
  password: "your password", // Your PostgreSQL password
  host: "your hostname", // Your PostgreSQL host (usually 'localhost' for a local installation)
  port: 5432, // Your PostgreSQL port (usually 5432)
  dialect: "postgres", // Specify the dialect, in this case, PostgreSQL
};

const sequelize = new Sequelize(config);

module.exports = sequelize;
