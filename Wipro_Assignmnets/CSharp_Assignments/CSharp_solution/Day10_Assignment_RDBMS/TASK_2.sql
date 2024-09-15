
CREATE DATABASE librarysystem;

USE librarysystem;

-- Creating table for Author
CREATE TABLE Author (
    AuthorID INT PRIMARY KEY,
    Name VARCHAR(255) NOT NULL,
    BirthYear YEAR
);

-- Creating table for Book
CREATE TABLE Book (
    BookID INT PRIMARY KEY,
    Title VARCHAR(255) NOT NULL,
    AuthorID INT,
    Publisher VARCHAR(255) NOT NULL,
    YearPublished YEAR NOT NULL,
    ISBN VARCHAR(13) UNIQUE NOT NULL,
    FOREIGN KEY (AuthorID) REFERENCES Author(AuthorID)
);

-- Creating table for Member
CREATE TABLE Member (
    MemberID INT PRIMARY KEY,
    FullName VARCHAR(255) NOT NULL,
    Address VARCHAR(255) NOT NULL,
    PhoneNumber VARCHAR(15) NOT NULL,
    Email VARCHAR(255) UNIQUE NOT NULL
);

-- Creating table for Loan
CREATE TABLE Loan (
    LoanID INT PRIMARY KEY,
    BookID INT NOT NULL,
    MemberID INT NOT NULL,
    LoanDate DATE NOT NULL,
    ReturnDate DATE,
    FOREIGN KEY (BookID) REFERENCES Book(BookID),
    FOREIGN KEY (MemberID) REFERENCES Member(MemberID)
);
