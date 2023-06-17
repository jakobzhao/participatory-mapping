// This document provides the connection to the database!

const { Pool } = require('pg');


const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
  


pool.on('connect', () => {
    console.log("Database connection success - connected to doyenne!");
});

module.exports = {
    query: (text, params) => pool.query(text, params),
};