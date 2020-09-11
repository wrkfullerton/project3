DROP DATABASE IF EXISTS userdb;
CREATE DATABASE userdb;
USE userdb;

-- deletes data from table Users
DELETE FROM Users;

-- resets the auto increment to 1 if row id doesnt start at 1
ALTER TABLE Users AUTO_INCREMENT = 1;

CREATE TABLE User (
   id INT NOT NULL AUTO_INCREMENT,
   first_name VARCHAR(100),
   last_name VARCHAR(100),
   email VARCHAR(100),
   password VARCHAR(100),
   profile VARCHAR(100),
   grade VARCHAR(100),
   subject VARCHAR(100),
   createdAt DATE,
  
   PRIMARY KEY (id)
);

