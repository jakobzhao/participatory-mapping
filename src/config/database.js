// Import the required module
const { Pool } = require('pg');

// Create a new instance of the Pool object with the database connection configuration
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    ssl: {
        rejectUnauthorized: false
    }
});

// Event listener for the 'connect' event, which is triggered when a new connection is established
pool.on('connect', () => {
    console.log("Database connection success - connected to Heroku database!");
});

// Export an object with a 'query' method that executes SQL queries using the connection pool
module.exports = {
    query: (text, params) => pool.query(text, params),
};
