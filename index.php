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


<body>

	<div id = "planetSide">

		<img src="img/sun/sun1.png" id = "sun1" class = "sun">
		<img src="img/sun/sun2.png" id = "sun2" class = "sun">
		<img src="img/sun/sun3.png" id = "sun3" class = "sun">
		<img src="img/sun/sun4.png" id = "sun4" class = "sun">

		<span id = "nameWrittenSun">my planet' star name</span>
 
		<img src="img/moon/moon1.png" id = "moon1Style1" class = "moon1">
		<img src="img/moon/moon2.png" id = "moon2Style1" class = "moon1">
		<img src="img/moon/moon3.png" id = "moon3Style1" class = "moon1">
		<img src="img/moon/moon4.png" id = "moon4Style1" class = "moon1">

		<span id="nameWrittenMoon1">moon1</span>

		<img src="img/moon/moon1.png" id = "moon1Style2" class = "moon2">
		<img src="img/moon/moon2.png" id = "moon2Style2" class = "moon2">
		<img src="img/moon/moon3.png" id = "moon3Style2" class = "moon2">
		<img src="img/moon/moon4.png" id = "moon4Style2" class = "moon2">

		<span id = "nameWrittenMoon2">moon2</span>

		<img src="img/moon/moon1.png" id = "moon1Style3" class = "moon3">
		<img src="img/moon/moon2.png" id = "moon2Style3" class = "moon3">
		<img src="img/moon/moon3.png" id = "moon3Style3" class = "moon3">
		<img src="img/moon/moon4.png" id = "moon4Style3" class = "moon3">

		<span id = "nameWrittenMoon3">moon3</span>

		<img src="img/planet2-gas.png" id= "planetChosen">
		<img src="img/planet3-gas.png" id= "planetChosen1">
		<img src="img/planet1-gas.png" id= "planetChosen2">
		<img src="img/planet4-telluric.png" id= "planetChosen3">
		<img src="img/planet5-telluric.png" id= "planetChosen4">
		<img src="img/planet6-telluric.png" id= "planetChosen5">
		<img src="img/planet7-telluric.png" id= "planetChosen6">
		<span id = "PlanetName">My Planet</span>
			<img src="img/ring/ring.png" id= "ring1">
			<img src="img/ring/ring2.png" id= "ring2">
			<img src="img/ring/ring3.png" id= "ring3"/>

		<div id = "switchRight" onclick="switchPlanet()"></div>
		<div id = "switchLeft" onclick="switchPlanetless()"></div>
		<div id ="id" name = "id">1</div>

		<div id = "arrow1"></div>
		<div id = "arrow2"></div>
		<div id = "arrow3"></div>
	</div>



	<div id = "choiceSide">

		<img src="img/logo.png" id="logo">
	


		<form method="POST" action= "planetFateEND.php">

			<div>
				<input id="planetName" required autocomplete="off" placeholder="Your Planet's Name" onkeyup="writePlanetName(this.value); showSun()" maxlength="20" minlength="1"  name = "planetName">
			</div>

			
			<div id = "ringChoice">
				<div id = "numberDiv">
					<label for="planetName">planet ring number : </label>
					<input id = "ringNumber" type="range"  value="0" min="0" max="3" onchange="showNumberChosen(this.value)"    name = "ringNumber">
				</div>
					<label for="ringNumber" id="ringNumberChosen" >0</label>
			
			</div>

			<div id = "planetTypeChoice" >
				<span id = "gasText">gas</span>
				<input type="radio" name="planetType" value="gas" checked onchange="focusAPlanet(this.value)" id = "gas">

			
				<input type="radio" name="planetType" value="telluric" onchange="focusAPlanet(this.value)" id = "telluric">
				<span id = "telluricText">telluric</span>
			</div>


			<div id = "moonAll">
				<div id = "moonrow">
					<div id = "moonColomn">
						<label id="numberOfMoontext">number of moon :</label>
						<input type = "number" name="numberOfMoon" id ="numberOfMoon" autocomplete="off" max = "3" min="0" value="0" onchange ="moonSet(this.value)" onkeyup ="moonSet(this.value)">
					</div>
					<span id = "moonNumber">0</span>
				</div>
				<div>



					<div id = "moonSelect1" class = "moonSelect">
						<input id = "moon1Name" placeholder="first moon name" disabled onkeyup="writeMoon1Name(this.value)" maxlength="9" minlength="1"   name = "moon1Name">
						<span>:</span>
						<select id = "moonstylea1" disabled onchange = "moonSelection(this.value)"  name = "moon1Style" >
							<optgroup label="first moon style">
								<option id = "stylea1" value = "moon1Style1" selected >moon 1</option>
								<option id = "stylea2" value = "moon2Style1" >moon 2</option>
								<option id = "stylea3" value = "moon3Style1">moon 3</option>
								<option id = "stylea4" value = "moon4Style1">moon 4</option>
							</optgroup>
						</select>
					</div>



					<div id = "moonSelect2" class = "moonSelect">
						<input id = "moon2Name" placeholder="second moon name" disabled onkeyup="writeMoon2Name(this.value)" maxlength="12" minlength="1"     name = "moon2Name">
						<span>:</span>
						<select id = "moonstyleb2" disabled onchange = "moonSelection2(this.value)"  name = "moon2Stye">
							<optgroup label="second moon style">
								<option id = "styleb1" value = "moon1Style2">moon 1</option>
								<option id = "styleb2" value="moon2Style2" selected>moon 2</option>
								<option id = "styleb3" value= "moon3Style2">moon 3</option>
								<option id = "styleb4" value= "moon4Style2">moon 4</option>
							</optgroup>
						</select>
					</div>


					<div id = "moonSelect3" class = "moonSelect">
						<input id = "moon3Name" placeholder="third moon name" disabled onkeyup="writeMoon3Name(this.value)" maxlength="15" minlength="1"   name = "moon3Name">
						<span>:</span>
						<select id = "moonstylec3" disabled onchange = "moonSelection3(this.value)"   name = "moon3Style">
							<optgroup label = "third moon style">
								<option id = "stylec1" value = "moon1Style3">moon 1</option>
								<option id = "stylec2" value = "moon2Style3">moon 2</option>
								<option id = "stylec3" value = "moon3Style3" selected>moon 3</option>
								<option id = "stylec4" value = "moon4Style3">moon 4</option>
							</optgroup>
						</select>
					</div>
				</div>
			</div>



			<div id = "sunSelectors">
				<p>star of my planet :</p>
					<div id = "contenairGlobal">
						<div id = "contenairColor">
							<div>
								<input id="#FFE64C" type="color" value = "#FFE64C" disabled>
								<div id = "yellowClick" onclick="putSun('sun1')" class="sunColorDiv"></div>
							</div>

							<div>	
								<input id = "#FABA61" type="color" value = "#FABA61" disabled>
								<div id = "orangeClick" onclick="putSun('sun2')" class = "sunColorDiv"></div>
							</div>

							<div>
								<input id = "#A2FBFF" type="color" value= "#A2FBFF" disabled >
								<div id = "blueClick" onclick = "putSun('sun3')" class = "sunColorDiv"></div>
							</div>

							<div>
								<input id = "#FFFFFF" type="color" value= "#FFFFFF" disabled >
								<div id = "whiteClick" onclick="putSun('sun4')" class = "sunColorDiv"></div>
							</div>
						</div>

							<input id = "starName" onkeyup="writeSunName(this.value)" maxlength="15" minlength="1" required placeholder="name of the star"    name = "starName">
					</div>

			</div>
			<input type="submit" name="submit" value = "end it">
		</form>

	</div>


	<script src="scripts/index.js" type="text/javascript"></script>
</body>

</html>

<?php


session_destroy();

?>