const { Pool } = require('pg')
const pool = new Pool({
  user: 'courtneyk',
  host: 'localhost',
  database: 'mysolodb',
  password: 'hugs4court',
  port: 5432,
});

//connects to db, which (as shown above) is always running on another port;
pool.connect()
  .then(data => console.log('connected!'))
  .catch (err => console.log(err))

  //refer to pg docs on structure: exporting query recommended
module.exports = {
  query: (text, params) =>  pool.query(text, params)
  
}