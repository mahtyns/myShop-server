
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