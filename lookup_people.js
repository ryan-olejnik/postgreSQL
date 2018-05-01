var search_name = process.argv[2];

const pg = require('pg');
const settings = require('./settings.json');

const client = new pg.Client({
  user     : settings.user,
  password : settings.password,
  database : settings.database,
  host     : settings.hostname,
  port     : settings.port,
  ssl      : settings.ssl 
});

client.connect((err)=> {
  if (err) console.log('Connection Error:', err);

  client.query(`SELECT * FROM famous_people WHERE first_name = '${search_name}';`, (err, results)=> {
    if (err) console.log('Error running query:', err);
    for (let row of results.rows){
      console.log(`
        Found the following famous person:
        ${row.first_name} ${row.last_name}
        Birthday is: ${row.birthdate}
        Human-ID: ${row.id}`);

    }
    client.end();

  });
});




