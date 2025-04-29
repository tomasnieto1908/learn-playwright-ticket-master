const sqlite3 = require('sqlite3').verbose();
const db = new sqlite3.Database('./tickets.db');

// Crear las tablas si no existen
db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS events (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT NOT NULL,
      description TEXT,
      date TEXT,
      total_tickets INTEGER,
      available_tickets INTEGER
    )
  `);

  db.run(`
    CREATE TABLE IF NOT EXISTS tickets (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      event_id INTEGER,
      purchase_date TEXT,
      FOREIGN KEY (event_id) REFERENCES events(id)
    )
  `);
});

module.exports = db;
