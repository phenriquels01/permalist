-- Removes table if it already exists
DROP TABLE IF EXISTS items;

-- Creating table
CREATE TABLE items (
  id SERIAL PRIMARY KEY,
  title VARCHAR(100) NOT NULL
);