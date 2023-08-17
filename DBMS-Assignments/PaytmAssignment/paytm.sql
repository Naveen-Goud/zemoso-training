create database paytm;
use paytm;

-- Creating the Account table
CREATE TABLE Account (
  account_number INT PRIMARY KEY,
  customer_id INT,
  branch_id INT,
  account_type VARCHAR(255),
  account_balance DECIMAL(10,2),
  other_account_details VARCHAR(255),
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id),
  FOREIGN KEY (branch_id) REFERENCES Branch(branch_id)
);

-- Creating the Customer table
CREATE TABLE Customer (
  customer_id INT PRIMARY KEY,
  customer_name VARCHAR(255),
  customer_address VARCHAR(255),
  other_customer_details VARCHAR(255)
);

-- Creating the Branch table
CREATE DATABASE `paytm` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */ /*!80016 DEFAULT ENCRYPTION='N' */;

CREATE TABLE Branch (
  branch_id INT PRIMARY KEY,
  branch_name VARCHAR(255),
  branch_address VARCHAR(255)
);

