-- Creating the database
CREATE DATABASE librarydb;
USE librarydb;

-- Creating Books table
CREATE TABLE Books (
    BookID INT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    Author VARCHAR(255) NOT NULL,
    ISBN VARCHAR(13) UNIQUE,
    PublishedYear INT CHECK (PublishedYear >= 1500)
);

-- Creating Members table
CREATE TABLE Members (
    MemberID INT PRIMARY KEY,
    FirstName VARCHAR(255) NOT NULL,
    LastName VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL UNIQUE,
    JoinDate DATE
);

-- Creating Loans table
CREATE TABLE Loans (
    LoanID INT PRIMARY KEY,
    BookID INT,
    MemberID INT,
    LoanDate DATE NOT NULL,
    ReturnDate DATE,
    FOREIGN KEY (BookID) REFERENCES Books(BookID),
    FOREIGN KEY (MemberID) REFERENCES Members(MemberID)
);

-- Creating Categories table
CREATE TABLE Categories (
    CategoryID INT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL UNIQUE
);

-- Creating BookCategories table
CREATE TABLE BookCategories (
    BookID INT,
    CategoryID INT,
    PRIMARY KEY (BookID, CategoryID),
    FOREIGN KEY (BookID) REFERENCES Books(BookID),
    FOREIGN KEY (CategoryID) REFERENCES Categories(CategoryID)
);

-- Modifing the table 
ALTER TABLE Members ADD PhoneNumber VARCHAR(15);
ALTER TABLE Members DROP COLUMN Email;


-- Droping the table
DROP TABLE IF EXISTS librarydb;
