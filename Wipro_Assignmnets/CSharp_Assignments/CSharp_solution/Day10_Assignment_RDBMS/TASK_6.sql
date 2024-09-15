-- INNER JOIN
SELECT o.OrderID, c.CustomerName, c.Email
FROM orders o
INNER JOIN customers c ON o.CustomerID = c.CustomerID
WHERE c.Region = 'Mumbai';

-- LEFT JOIN
SELECT c.CustomerID, c.CustomerName, o.OrderID
FROM customers c
LEFT JOIN orders o ON c.CustomerID = o.CustomerID;
