-- Subquery
SELECT CustomerID, CustomerName
FROM customers
WHERE CustomerID IN (
    SELECT CustomerID
    FROM orders
    GROUP BY CustomerID
    HAVING AVG(TotalAmount) > (SELECT AVG(TotalAmount) FROM orders)
);

-- UNION Query
SELECT CustomerName, Email, PhoneNumber FROM customers WHERE Region = 'Chennai'
UNION
SELECT CustomerName, Email, PhoneNumber FROM customers WHERE Region = 'Bangalore';
