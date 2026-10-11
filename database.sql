CREATE DATABASE IF NOT EXISTS testdb;

USE testdb;

CREATE TABLE IF NOT EXISTS users (
id INT AUTO_INCREMENT PRIMARY KEY,
name VARCHAR(100) NOT NULL,
email VARCHAR(100) NOT NULL
);

INSERT INTO users (name, email)
VALUES
('Arafa', 'arafa@example.com'),
('Rahim', 'rahim@example.com');