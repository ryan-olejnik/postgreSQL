var lookup_person = require('./lookup_person.js');
var add_person = require('./add_person.js');


function printPerson(rows){
  console.log('First Name:', rows.first_name);
  console.log('Last Name:', rows.last_name);

}

lookup_person('Olejnik', printPerson);

add_person('Chris', 'Blum', '1992-01-01');


