const config = require("./index");

const db = require("serverless-mysql")({
  config: {
    host: config.DB_HOST,
    database: config.DB_DATABASE,
    user: config.DB_USER,
    password: config.DB_PASSWORD,
  },
});

module.exports = db;
