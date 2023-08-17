
 create database  EcommerceAssignment;
 use EcommerceAssignment;
 
  -- Creating the Hotel table
CREATE TABLE Hotel (
  hotel_id INT PRIMARY KEY,
  hotel_name VARCHAR(255),
  hotel_address VARCHAR(255),
  other_hotel_details VARCHAR(255)
);

-- Creating the Customer table
CREATE TABLE Customer (
  customer_id INT PRIMARY KEY,
  customer_name VARCHAR(255),
  customer_type VARCHAR(255),
  other_customer_details VARCHAR(255)
);

-- Creating the Customer table
CREATE TABLE Customer (
  customer_id INT PRIMARY KEY,
  customer_name VARCHAR(255),
  customer_type VARCHAR(255),
  other_customer_details VARCHAR(255)
);

-- Creating the Booking table
CREATE TABLE Booking (
  booking_id INT PRIMARY KEY,
  hotel_id INT,
  customer_id INT,
  FOREIGN KEY (hotel_id) REFERENCES Hotel(hotel_id),
  FOREIGN KEY (customer_id) REFERENCES Customer(customer_id))
