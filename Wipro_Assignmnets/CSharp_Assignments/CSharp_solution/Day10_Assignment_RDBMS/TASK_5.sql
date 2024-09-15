-- Retrieving all columns from 
SELECT * FROM Members;
SELECT * FROM Books;


-- Retrieving Specific Columns
SELECT MemberID, FirstName, LastName FROM Members WHERE City = 'Hyderabad';
SELECT BookID, Title FROM Books WHERE BookID = 421;
SELECT LoanID, MemberID, LoanDate FROM Members WHERE LoanDate IS NOT NULL;