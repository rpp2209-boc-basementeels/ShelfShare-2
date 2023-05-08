// Getting onto postgresql
const { Client } = require('pg');

const client = new Client({
  database: process.env.PG_DATABASE,
  host: process.env.PG_HOST,
  port: process.env.PG_PORT,
  user: process.env.PG_USER,
  password: process.env.PG_PASSWORD,
})

client.connect((err) => {
  if (err) {
    console.error('connection error', err.stack)
  } else {
    console.log('connected')
  }
});

client
  .query(`
  create table if not exists users (
    id serial primary key,
    username varchar (1000),
    photo varchar (1000),
    salt varchar (1000),
    email varchar (1000),
    first_name varchar (1000),
    last_name varchar (1000),
    gender varchar (1000),
    age int,
    is_library boolean
);`)
  .then(() => console.log('users table created'))
  .catch(err => console.log('users table creation failed', err));

  client
  .query(`
  create table if not exists sessions (
    id serial primary key,
    user_id int,
    hash varchar(1000)
);`)
  .then(() => console.log('sessions table created'))
  .catch(err => console.log('sessions table creation failed', err));

// Authorization
// Check the database for hash, user
const constructWhere = (obj) => {
  var result = 'WHERE ';
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (isNaN(obj[keys[i]]) === false) {
      result += `${keys[i]} = ${obj[keys[i]]}`;
    } else {
      result += `${keys[i]} = '${obj[keys[i]]}'`;
    }
    if (i !== keys.length - 1) {
      result += ',';
    }
  }
  return result;
};

const constructValues = (obj) => {
  var column = '';
  var values = '';
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    if (i === 0) {
      column += '(';
      values += '(';
    }

    column += `${keys[i]}`;
    if (isNaN(obj[keys[i]]) === false) {
      values += `${obj[keys[i]]}`;
    } else {
      values += `'${obj[keys[i]]}'`;
    }

    if (i === keys.length - 1) {
      column += ')';
      values += ')';
    } else {
      column += ',';
      values += ',';
    }
  }
  return `${column} VALUES ${values}`;
};

const constructSet = (obj) => {
  var result = 'SET ';
  const keys = Object.keys(obj);
  for (let i = 0; i < keys.length; i++) {
    result += `${keys[i]} = `;
    if (isNaN(obj[keys[i]]) === false) {
      result += `${obj[keys[i]]}`;
    } else {
      result += `'${obj[keys[i]]}'`;
    }
    if (i !== keys.length - 1) {
      result += ', ';
    }
  }
  return result;
};

const checkTable = (table, obj, callback) => {
  client.query(`SELECT * FROM ${table} ${constructWhere(obj)};`)
    .then(data => callback(null, data.rows))
    .catch(err => callback(err));
};

const addToTable = (table, obj, callback) => {
  client.query(`INSERT INTO ${table} ${constructValues(obj)};`)
    .then(data => callback(null, data))
    .catch(err => callback(err));
};

const updateTable = (table, whereObj, setObj, callback) => {
  console.log(`UPDATE ${table} ${constructSet(setObj)} ${constructWhere(whereObj)};`)
  client.query(`UPDATE ${table} ${constructSet(setObj)} ${constructWhere(whereObj)};`)
    .then(data => callback(null, data))
    .catch(err => callback(err));
};

const getID = (table, obj, callback) => {
  console.log(`SELECT id FROM ${table} ${constructWhere(obj)};`)
  client.query(`SELECT id FROM ${table} ${constructWhere(obj)};`)
    .then(data => callback(null, data.rows))
    .catch(err => callback(err));
};

module.exports = { checkTable, addToTable, getID, updateTable };