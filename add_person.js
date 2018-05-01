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



module.exports = function(first_name, last_name, birthdate){
  knex('famous_people').insert({
    first_name: first_name,
    last_name: last_name,
    birthdate: birthdate
  })
  .then(()=>{
    knex.destroy();
  });
};

