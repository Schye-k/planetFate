<?php
	session_start();

	require_once('dbconnectionPlanetFate.php');
	$bdd = "";
	connection($bdd);


	$req = connection($bdd)->prepare('INSERT INTO planet(planetName, ringNumber, type, moonName1, moonName2, moonName3, starName) VALUES(:planetName, :ringNumber, :type, :moonName1, :moonName2, :moonName3, :starName)');
	if (!isset($_POST["moon1Name"])) {
		$_POST["moon1Name"] = NULL;
	}
	if (!isset($_POST["moon2Name"])) {
		$_POST["moon2Name"] = NULL;
	};
	if (!isset($_POST["moon3Name"])) {
		$_POST["moon3Name"] = NULL;
	};
	$req->execute(array(
		'planetName' => $_POST["planetName"],
		'ringNumber' => $_POST["ringNumber"],
		'type' => $_POST["planetType"],
		'moonName1' => $_POST["moon1Name"],
		'moonName2' => $_POST["moon2Name"],
		'moonName3' => $_POST["moon3Name"],
		'starName' => $_POST["starName"]
	));



	header('Location: http://localhost/PlanetFate/planetSearch.php');
	exit();

?>