CREATE TABLE items (
  id INTEGER PRIMARY KEY,
  title TEXT NOT NULL,
  description TEXT NOT NULL,
  category TEXT NOT NULL,
  content TEXT
);

INSERT INTO items (title, description, category, content) VALUES
  ('React Hooks Guide', 'Comprehensive guide to React Hooks', 'Programming', 'React Hooks are a revolutionary feature that enables function components to manage state and side effects. This guide covers useState, useEffect, useContext, and more advanced patterns.'),
  ('TypeScript Best Practices', 'Learn TypeScript best practices', 'Programming', 'Discover essential TypeScript patterns including proper type definitions, generics usage, and avoiding common pitfalls in large-scale applications.'),
  ('PWA Development', 'Progressive Web App development guide', 'Web Development', 'Learn how to build Progressive Web Apps that work offline, can be installed on devices, and provide a native-like experience.'),
  ('SQL Optimization', 'Database query optimization techniques', 'Database', 'Master the art of SQL query optimization through proper indexing, query planning, and understanding database execution plans.'),
  ('JavaScript ES2024', 'New features in JavaScript ES2024', 'Programming', 'Explore the latest JavaScript features including new array methods, RegExp improvements, and other language enhancements.');