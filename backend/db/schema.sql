-- DROP DATABASE IF EXISTS firebase_auth;
-- CREATE DATABASE firebase_auth;

-- \c firebase_auth;

DROP TABLE IF EXISTS users;

CREATE TABLE users(
    id VARCHAR PRIMARY KEY,
    email VARCHAR
);
