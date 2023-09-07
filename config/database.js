const { Sequelize } = require("sequelize");

const config = {
  database: "abc",
  username: "abc", // Your PostgreSQL username
  password: "abc", // Your PostgreSQL password
  host: "localhost", // Your PostgreSQL host (usually 'localhost' for a local installation)
  port: 5432, // Your PostgreSQL port (usually 5432)
  dialect: "postgres", // Specify the dialect, in this case, PostgreSQL
};

const sequelize = new Sequelize(config);

module.exports = sequelize;
