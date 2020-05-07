<?php


function connection($bdd) {

	$bdd = new PDO('mysql:host=localhost;dbname=planetfate;charset=utf8', 'root', '', array(PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION));
	try{
		$bdd = new PDO('mysql:host=localhost;dbname=planetfate;charset=utf8', 'root', '');
	}

	catch (Exception $e)
	{
			die('Erreur : ' . $e->getMessage());
	}
	return $bdd;
};


?>