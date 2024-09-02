const Pool = require("pg").Pool;
const pool = new Pool({
    user: "postgres",
    password: "b0urb0nk",
    server: "localhost",
    port: 5432,
    database: "profileinfo"
});

module.exports = pool;