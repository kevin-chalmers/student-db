"use strict";

// Import SQLite library.
const sqlite3 = require("sqlite3").verbose();

// Connect to the database.
let db = new sqlite3.Database("students.db", function(err) {
    if (err) {
        return console.error(e.error(err.message));
    }
    console.log("Connected to students database.");
});