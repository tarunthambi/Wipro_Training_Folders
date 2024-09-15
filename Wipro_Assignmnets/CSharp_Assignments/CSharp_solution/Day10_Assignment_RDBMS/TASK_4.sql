-- Insert Records
INSERT INTO Book (BookID, Title, Author, Publisher, YearPublished, ISBN) VALUES
(001, 'The Great Gatsby', 'F. Scott Fitzgerald', 'Scribner', 1925, '9780743273565'),
(002, '1984', 'George Orwell', 'Secker & Warburg', 1949, '9780451524935');

INSERT INTO Member (MemberID, FirstName, LastName, Address, PhoneNumber, Email) VALUES
(421, 'John', 'Doe', '123 Elm St', '555-1234', 'john.doe@example.com'),
(447, 'Jane', 'Smith', '456 Oak St', '555-5678', 'jane.smith@example.com');

INSERT INTO Loan (LoanID, BookID, MemberID, LoanDate, ReturnDate) VALUES
(1, 001, 421, '2024-01-01', '2024-01-10'),
(2, 002, 447, '2024-01-05', NULL);

-- Update Records
UPDATE Member SET PhoneNumber = '555-9999' WHERE MemberID = 421;

-- Delete Records
DELETE FROM Loan WHERE MemberID = 447;

-- Bulk Insert
BULK INSERT Book FROM 'C:\Database_Files\database-main\MSSQL\users.csv' WITH (FIELDTERMINATOR = ',', ROWTERMINATOR = '\n');
