-- Create Table Customers
CREATE TABLE customers
(
    id SERIAL PRIMARY KEY NOT NULL,
    name VARCHAR(255) NOT NULL,
    email VARCHAR(255) NOT NULL,
    age INT NOT NULL,
    dob DATE,
    created_at DATE DEFAULT CURRENT_DATE
);

-- Insert Data Customers
INSERT INTO customers (name, email, age, dob) VALUES ('Joe', 'joe@mail.com', 50, '1973-04-04');
INSERT INTO customers (name, email, age, dob) VALUES ('Karin', 'karina@mail.com', 32, '1991-04-13');
INSERT INTO customers (name, email, age, dob) VALUES ('Mamang', 'mamang@mail.com', 46, '1976-09-08');
INSERT INTO customers (name, email, age, dob) VALUES ('Asep', 'asep@mail.com', 38, '1985-02-17');
INSERT INTO customers (name, email, age, dob) VALUES ('Makmur', 'makmur@mail.com', 33, '1990-02-17');

-- Create Table Users
CREATE TABLE users
(
    id SERIAL PRIMARY KEY NOT NULL,
    email VARCHAR(255) NOT NULL,
    password VARCHAR(255) NOT NULL,
    created_at DATE DEFAULT CURRENT_DATE
);

