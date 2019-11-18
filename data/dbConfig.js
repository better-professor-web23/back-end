const knex = require("knex");

const knexFile = require("../knexfile");

const knexConfig = process.env.NODE_ENV || "development";

module.exports = knex(knexFile[knexConfig]);
