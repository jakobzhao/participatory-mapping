// This document provides the connection to the database!

const { Pool } = require('pg');
const dotenv = require('dotenv');

dotenv.config();

// database configurations on the local machine
const connectionString = process.env.DATABASE_URL;
// postgres://{user}:{password}@{hostname}:{port}/{database-name}  // use this in the development f
const pool = new Pool({
    connectionString,
    ssl: {
        rejectUnauthorized: false
    }
});


// const pool = new Pool({
//     host: process.env.DATABASE_HOST,
//     port: process.env.DATABASE_PORT,
//     database: process.env.DATABASE_NAME,
//     user: process.env.DATABASE_USERNAME,
//     password: process.env.DATABASE_PASSWORD,
//   });

pool.on('connect', () => {
    console.log("Database connection success - connected to doyenne!");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};