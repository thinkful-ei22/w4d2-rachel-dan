'use strict';

const { DATABASE } = require('./config');
const knex = require('knex')(DATABASE);

// clear the console (just a convenience)
process.stdout.write('\x1Bc');

// Sample select 
// knex('restaurants')
//   .select('id', 'name', 'borough', 'cuisine')
//   .where('borough', 'Manhattan')
//   .limit(5)
//   .debug(false)
//   .then(results => console.log(results));

// .then(results => console.log(JSON.stringify(results, null, 2)));

// knex
//   .select()
//   .table('restaurants')
//   .limit(2)
//   .debug(false)
//   .then(results => console.log(results));

// knex
//   .select('name', 'cuisine', 'address_zipcode')
//   .from('restaurants')
//   .limit(10)
//   .then(res => console.log(res));

// knex
//   .column('name', 'cuisine', 'address_zipcode')
//   .from('restaurants')
//   .limit(5)
//   .then(res => console.log(JSON.stringify(res, null, 2)));

// knex('restaurants')
//   .where({cuisine: 'Hamburgers'})
//   .select('id')
//   .then(res => console.log(res));

// knex('restaurants')
//   .select()
//   .then(res => console.log(res));

// knex('restaurants')
//   .select()
//   .where({cuisine: 'Italian'})
//   .limit(10)
//   .then(res => console.log(res));

// knex('restaurants')
//   .select('id', 'name')
//   .where({cuisine: 'Italian'})
//   .limit(10)
//   .then(res => console.log(res));

// knex('restaurants')
//   .count()
//   .where('cuisine', 'Thai')
//   .then(res => console.log(res));

// knex('restaurants')
//   .count()
//   .then(res => console.log(res));

// knex('restaurants')
//   .count()
//   .where({address_zipcode: '11372', cuisine: 'Thai' })
//   .then(res => console.log(res));

// knex('restaurants')
//   .select('id', 'name')
//   .where('cuisine', 'Italian')
//   .whereIn('address_zipcode', [10012, 10013, 10014])
//   .orderBy('name', 'asc')
//   .limit(5)
//   .then(res => console.log(res));


// knex('restaurants')
//   .insert({name: 'Dummy Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '123',
//     address_street: 'Atlantic Avenue',
//     address_zipcode: '11231'
//   })
//   .then(res=>console.log(res));


// knex('restaurants')
//   .insert({name: 'Coffee Place',
//     borough: 'Manhattan',
//     cuisine: 'coffee',
//     address_building_number: '234',
//     address_street: 'Uzbekistan Avenue',
//     address_zipcode: '11101'
//   }, ['id', 'name'])
//   .then(res=>console.log(res));

// knex('restaurants')
//   .insert([{ name: 'Pie Republic',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '555',
//     address_street: 'Virginia Boulevard',
//     address_zipcode: '11234'
//   },
//   {
//     name: 'Yet Another Cafe',
//     borough: 'Brooklyn',
//     cuisine: 'coffee',
//     address_building_number: '789',
//     address_street: 'Arlington Boulevard',
//     address_zipcode: '34765'
//   },
//   {
//     name: 'Pancake Heaven',
//     borough: 'Manhattan',
//     cuisine: 'coffee',
//     address_building_number: '435',
//     address_street: 'Washington Street',
//     address_zipcode: '34345'
//   }], ['id', 'name'])
//   .then(res => console.log(res));

// knex('restaurants')
//   .where('nyc_restaurant_id', '30191841')
//   .update('name', 'DJ Reynolds Pub and Restaurant', ['id', 'name'])
//   .then(res=> console.log(res));

// knex('grades')
//   .where('id', '10')
//   .del()
//   .then(res=>console.log(res));

// knex('restaurants')
//   .where('id', '22')
//   .del()
//   .then(res=>console.log(res));

// knex('grades')
//   .select()
//   .where('id', '10')
//   .then(res => console.log(res));
