const settings = require('./settings.json');

var knex = require('knex')({
  client: 'pg',
  connection: {
    host : settings.hostname,
    user : settings.user,
    password : settings.password,
    database : settings.database
  }
});

module.exports = function lookup_person(search_name, callback){

  knex.select('*').from('famous_people')
  .where('last_name', '=', search_name)
  .then((rows) => {

    for (let row of rows){
      callback(row);
    }
  })

  .catch((err)=>{
    if (err) return console.error('Error connecting with database:', err);
  })
  .then(() => knex.destroy());


};


