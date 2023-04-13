-- Document to paste in the cmd 

CREATE DATABASE myshopdb;

CREATE TABLE products_table(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    product_description VARCHAR(150),
    product_price INT NOT NULL,
    product_cat VARCHAR(25),
    product_stock INT,
    product_url VARCHAR(1000)
    );

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock, product_url) VALUES('Neauthy Cream', 'Skincare Cream Face 100% vegan', 25, 'Cream', 7, 'https://images.unsplash.com/photo-1601049541289-9b1b7bbbfe19?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=686&q=80');

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock, product_url) VALUES('Lip Balm scrub', 'Lip scrub with sugar and coco', 15, 'Lips', 5, 'https://images.unsplash.com/photo-1599305090598-fe179d501227?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=764&q=80');

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock, product_url) VALUES('Golden Elixir Oil', 'Golden Elixir for skin and hair care', 45, 'Oil', 5, 'https://images.unsplash.com/photo-1615683565481-ba01cf7c6963?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2080&q=80');

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock, product_url) VALUES('Laneige Tonic', 'Rose tonic calming & Balancing', 23, 'Tonic', 2, 'https://images.unsplash.com/photo-1561920723-e0c68a4fe723?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=789&q=80' );

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock, product_url) VALUES('Chanel No5', 'Chanel No5 Eau de parfum', 70, 'Perfume', 2, 'https://images.unsplash.com/photo-1610113774925-1fa9adfc28e5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTI2fHxjb3NtZXRpY3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60');

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock, product_url) VALUES('Chanel Gabrielle', 'Chanel Gabrielle Eau de parfum', 55, 'Perfume', 1, 'https://images.unsplash.com/photo-1563170351-be82bc888aa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80');

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock, product_url) VALUES('Avocado Face oil', 'Oil face skin care with avocado', 30, 'Oil', 6, 'https://images.unsplash.com/photo-1611316930659-2e552e46d89b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80');

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock, product_url) VALUES('YSL Black Opium', 'Yves Saint Laurent Black Opium eau de toilette', 49, 'Perfume', 2, 'https://images.unsplash.com/photo-1600612253971-422e7f7faeb6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=735&q=80');

INSERT INTO products_table (product_name, product_description, product_price, product_cat, product_stock, product_url) VALUES('Biotherm Aqua Source', 'Day cream hydration 48h', 35, 'Cream', 6, 'https://images.unsplash.com/photo-1620946419190-5b1345a7e5be?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=688&q=80');

CREATE TABLE user_product(
    product_id SERIAL PRIMARY KEY,
    product_name VARCHAR(50) NOT NULL,
    product_description VARCHAR(150),
    product_price INT NOT NULL,
    product_cat VARCHAR(25),
    product_stock INT,
    product_url VARCHAR(1000)
    );

ALTER TABLE user_product
ADD product_amount INT;

INSERT INTO user_product (product_name, product_description, product_price, product_cat, product_stock) VALUES('Test Item', 'Test Item to do the tests', 25, 'Test-Cat', 3, 1);

DELETE FROM user_product WHERE product_id = 2;