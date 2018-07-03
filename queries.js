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

knex('restaurants')
  .select('id', 'name')
  .where('cuisine', 'Italian')
  .whereIn('address_zipcode', [10012, 10013, 10014])
  .orderBy('name', 'asc')
  .limit(5)
  .then(res => console.log(res));
