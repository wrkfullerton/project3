DROP DATABASE IF EXISTS userdb;
CREATE DATABASE userdb;
USE userdb;

-- deletes data from table Users
DELETE FROM Users;

-- resets the auto increment to 1 if row id doesnt start at 1
ALTER TABLE Users AUTO_INCREMENT = 1;