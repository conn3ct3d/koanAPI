import sqlite3 from 'sqlite3';
import { quotes as initialQuotes } from './quotes.js'; 

// koanapi.db'
const db = new sqlite3.Database('./koanapi.db', (err) => {
    if (err) {
        console.error("Error opening database " + err.message);
    } else {
        console.log("Connected to the SQLite database.");
        // Use serialize to ensure table creation and seeding happens in order
        db.serialize(() => {
            // Create the quotes table if it doesn't exist
            db.run(`CREATE TABLE IF NOT EXISTS quotes (
                id INTEGER PRIMARY KEY AUTOINCREMENT,
                quote TEXT NOT NULL,
                category TEXT NOT NULL
            )`, (err) => {
                if (err) {
                    return console.error("Error creating table", err.message);
                }
                console.log("Quotes table created or already exists.");

                // Check if the table is empty before seeding
                db.get("SELECT COUNT(*) as count FROM quotes", (err, row) => {
                    if (err) {
                        return console.error("Error counting quotes", err.message);
                    }
                    if (row.count === 0) {
                        console.log("Seeding database with initial quotes...");
                        seedDatabase();
                    } else {
                        console.log("Database already seeded.");
                    }
                });
            });
        });
    }
});

const seedDatabase = () => {
    const insert = db.prepare("INSERT INTO quotes (quote, category) VALUES (?, ?)");
    for (const category in initialQuotes) {
        initialQuotes[category].forEach(quote => {
            insert.run(quote, category);
        });
    }
    insert.finalize((err) => {
        if (err) {
            console.error("Error finalizing seed", err.message);
        } else {
            console.log("Database seeding complete.");
        }
    });
};

export default db;