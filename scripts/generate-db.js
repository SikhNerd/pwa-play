import Database from 'better-sqlite3';
import { writeFileSync } from 'fs';

// Create a new database
const db = new Database('public/database.db');

// Create tables and insert sample data
db.exec(`
  CREATE TABLE items (
    id INTEGER PRIMARY KEY,
    title TEXT NOT NULL,
    description TEXT NOT NULL,
    category TEXT NOT NULL
  );

  INSERT INTO items (title, description, category) VALUES
    ('React Hooks Guide', 'Comprehensive guide to React Hooks', 'Programming'),
    ('TypeScript Best Practices', 'Learn TypeScript best practices', 'Programming'),
    ('PWA Development', 'Progressive Web App development guide', 'Web Development'),
    ('SQL Optimization', 'Database query optimization techniques', 'Database'),
    ('JavaScript ES2024', 'New features in JavaScript ES2024', 'Programming');
`);

// Create indexes for better search performance
db.exec(`
  CREATE INDEX idx_title ON items(title);
  CREATE INDEX idx_description ON items(description);
  CREATE INDEX idx_category ON items(category);
`);

// Vacuum the database to optimize its size
db.exec('VACUUM;');

// Close the database connection
db.close();

console.log('Database generated successfully!');