// const Pool = require("pg").Pool;

// const pool = new Pool ( {
//     user: "postgres",
//     password: "Aeew!,!L02",
//     host: "localhost",
//     port: 5432,
//     database: "myshopdb"
// });

// module.exports = pool;

const { Client } = require('pg');

const pool = new Client({
  connectionString: 'postgres://nxcwclte:qbUqD7ikUh0bO4j9JJBOR_QUnf7TEcwM@horton.db.elephantsql.com/nxcwclte',
  ssl: {
    rejectUnauthorized: false
  }
});

pool.connect()
  .then(() => console.log('Connected to database'))
  .catch(err => console.error('Error connecting to database', err));

module.exports = pool;