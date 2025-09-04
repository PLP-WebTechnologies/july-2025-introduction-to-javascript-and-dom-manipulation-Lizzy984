-- Question 1: Employee and Office Information
SELECT 
    e.firstName, 
    e.lastName, 
    e.email, 
    e.officeCode
FROM employees e
INNER JOIN offices o ON e.officeCode = o.officeCode;

-- Question 2: Product Information with Product Lines
SELECT 
    p.productName, 
    p.productVendor, 
    p.productLine
FROM products p
LEFT JOIN productlines pl ON p.productLine = pl.productLine;

-- Question 3: Customer Orders (First 10)
SELECT 
    o.orderDate, 
    o.shippedDate, 
    o.status, 
    o.customerNumber
FROM customers c
RIGHT JOIN orders o ON c.customerNumber = o.customerNumber
LIMIT 10;