DROP DATABASE IF EXISTS userDB;
CREATE DATABASE userDB;
USE userDB;

CREATE TABLE tutors (
id INT NOT NULL AUTO_INCREMENT,
teacher VARCHAR(50),
grade VARCHAR(50),
subject VARCHAR(50),
email VARCHAR(50),
PRIMARY KEY (id)
);

CREATE TABLE students (
id INT NOT NULL AUTO_INCREMENT,
student VARCHAR(50),
grade VARCHAR(50),
subject VARCHAR(50),
email VARCHAR(50),
PRIMARY KEY (id)
);