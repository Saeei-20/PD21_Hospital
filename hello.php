<!DOCTYPE html>
<html>
<head>
    <title>Welcome</title>
</head>
<body>
    <h3>Welcome to Our Website!</h3>
    <p>Hello, <?php echo isset($_POST["fname"]) ? $_POST["fname"] : "Guest"; ?>!</p>
    <p>Your form is successfully submitted.</p>
</body>
</html>
