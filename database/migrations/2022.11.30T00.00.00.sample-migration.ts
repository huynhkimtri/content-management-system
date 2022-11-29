// NOTE: COMMENT OUT TO USE THIS SCRIPT

// 'use strict'
// /**
//  * Strapi automatically detects migration files and run them once at the next startup in alphabetical order. 
//  * Every new file is executed once. 
//  * Migrations are run before the database tables are synced with the content-types schemas.
//  */
// export default {
//   async up(knex) {
//     // You have full access to the Knex.js API with an already initialized connection to the database
//     // https://knexjs.org/guide/

//     // EXAMPLE: renaming a table
//     await knex.schema.renameTable('oldName', 'newName');

//     // EXAMPLE: renaming a column
//     await knex.schema.table('someTable', table => {
//       table.renameColumn('oldName', 'newName');
//     });

//     // EXAMPLE: updating data
//     await knex.from('someTable').update({ columnName: 'newValue' }).where({ columnName: 'oldValue' });
//   },
// };
