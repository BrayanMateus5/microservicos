/*parte de conexão com o banco de dados*/

const { Pool } = require("pg");

const pool = new Pool({ connectionString: process.env.DATABASE_URL
});

module.exports = pool;