<?php 
session_start(); 
?>

<!DOCTYPE html>
<html>
<head>
	<title>Planet Fate ~ Home</title>
	<meta charset="utf-8">
	<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style/index.css">
</head>

<body id = "searchBody">

		<img src="img/logo.png" id="logo">
	
		<form method="POST" action= "planetFind.php">
			<input name="planetNameSearch" placeholder="Name of the Planet You Want to Find">

			<input type="submit" name="submit" value = "search">
		</form>

</body>

</html>

<?php
session_destroy();

?>