<?php 
	session_start();

	require_once('dbconnectionPlanetFate.php');
	$bdd = "";
	connection($bdd);?>

<!DOCTYPE html>
<html>
<head>
	<title>Planet Fate ~ Home</title>
	<meta charset="utf-8">
	<link href="https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap" rel="stylesheet">
	<link rel="stylesheet" type="text/css" href="style/index.css">
</head>

<body id = "findBody">
<div>

<?php 

$search = $_POST["planetNameSearch"];
$owner_AND_fileName_ARRAY = array();

$query= ('SELECT planetName, ringNumber, type, moonName1, moonName2, moonName3, starName FROM planet WHERE planetName ="' . $search . '"');
$result = connection($bdd)->query($query);
$result->setFetchMode(PDO::FETCH_ASSOC);

	while ( $row = $result->fetch())
				{
					echo "<span>".$row['planetName'].'<br \>'."</span>";
					echo '<p>Planet\'s ring number :  '.$row["ringNumber"].'<br \>';
					echo 'Planet\'s type :  '.$row["type"].'<br \>';
					if(isset($row["moonName1"])) {
						echo 'Planet\'s first moon name :  '.$row["moonName1"].'<br \>';
					};
					if(isset($row["moonName2"])) {
						echo 'Planet\'s second moon name :  '.$row["moonName2"].'<br \>';
					};
					if(isset($row["moonName3"])) {
					echo 'Planet\'s third moon name :  '.$row["moonName3"].'<br \>';
					};
					echo 'Planet\'s Star Name :  '.$row["starName"];

				};

?>
</div>
</body>

</html>

<?php
session_destroy();

?>