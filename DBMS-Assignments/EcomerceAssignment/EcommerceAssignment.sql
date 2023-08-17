use ecommerceassignment;
-- Creating the Supplier table
CREATE TABLE Supplier (
  supplier_id INT PRIMARY KEY,
  supplier_name VARCHAR(20),
  supplier_address VARCHAR(20)
);

-- Creating the Items table
CREATE TABLE Items (
  item_id INT PRIMARY KEY,
  item_name VARCHAR(20),
  supplier_id INT,
  other_item_details VARCHAR(20),
  FOREIGN KEY (supplier_id) REFERENCES Supplier(supplier_id)
);

-- Creating the Customer table
CREATE TABLE Customer (
  customer_id INT PRIMARY KEY,
  customer_name VARCHAR(20),
  customer_address VARCHAR(20)
);

-- Creating the Order table
CREATE TABLE Order (
  order_id INT PRIMARY KEY,
  customer_id INT,
  order_date DATE,
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id)
);

-- Creating the Order_Items table
CREATE TABLE Order_Items (
  order_id INT,
  item_id INT,
  quantity INT,
  price DECIMAL(10,2),
  FOREIGN KEY (order_id) REFERENCES Order (order_id),
  FOREIGN KEY (item_id) REFERENCES Items(item_id)
);