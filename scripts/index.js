// window.alert("test");


var ringNumberChosen = document.getElementById("ringNumber").value;

function showNumberChosen(number) {
	document.getElementById("ringNumberChosen").innerHTML=number;


	if (number == 1) {
		document.getElementById("ring3").style.opacity = "0";
		document.getElementById("ring2").style.opacity = "0";
		document.getElementById("ring1").style.opacity = "0.8";
	} 
	else if (number == 2) {
		document.getElementById("ring3").style.opacity = "0";
		document.getElementById("ring2").style.opacity = "0.8";
		document.getElementById("ring1").style.opacity = "0.8";
	}
	else if (number == 3){
		document.getElementById("ring3").style.opacity = "0.8";
		document.getElementById("ring2").style.opacity = "0.8";
		document.getElementById("ring1").style.opacity = "0.8";
	}	

	else {
		document.getElementById("ring3").style.opacity = "0";
		document.getElementById("ring2").style.opacity = "0";
		document.getElementById("ring1").style.opacity = "0";		
	}

}

function writePlanetName(name) {
	
 	text = document.getElementById("PlanetName");

	text.innerHTML = "";
	text.style.textTransform = "uppercase";
	letters = name.split("");
	value = 0; 
		for ( i = 0; i < letters.length; i ++ ){
			if ( i ==  0 ) {
				value = 1;
				text.innerHTML = "<span style = 'color: red'>" + letters[i] + "</span>"
			}
			else if ( (i > 0) && (value == 1) ) {
				text.innerHTML += letters[i];
			}
		};
}

function showSun() {
	document.getElementById("sunSelectors").style.opacity = "1";
	document.getElementById("sun1").style.opacity = "1"; 
	document.getElementById("nameWrittenSun").style.opacity = "1";

}

function focusAPlanet(value) {
	var gasLabel = document.getElementById("gasText");
	var telluricLabel = document.getElementById("telluricText");
	id = document.getElementById("id");
	idValue = id.innerHTML; 
	idValue = parseInt(idValue);

	var p1 = document.getElementById("planetChosen");
	var p2 = document.getElementById("planetChosen1");
	var p3 = document.getElementById("planetChosen2");
	var p4 = document.getElementById("planetChosen3");
	var p5 = document.getElementById("planetChosen4");
	var p6 = document.getElementById("planetChosen5");
	var p7 = document.getElementById("planetChosen6");

	if (value == "gas") {
		gasLabel.style.opacity = "1";
		telluricLabel.style.opacity = "0";
		telluricLabel.style.letterSpacing = "-1vw";
		gasLabel.style.letterSpacing = "0";

		p1.style.opacity = "1";
		p2.style.opacity = "0"; 
		p3.style.opacity = "0"; 
		p4.style.opacity = "0"; 
		p5.style.opacity = "0"; 
		p6.style.opacity = "0";
		p7.style.opacity = "0";
	}

	else if (value == "telluric") {
		gasLabel.style.opacity = "0";
		telluricLabel.style.opacity = "1";
		telluricLabel.style.letterSpacing = "0";
		gasLabel.style.letterSpacing = "-1vw"

		p1.style.opacity = "0"; 
		p2.style.opacity = "0"; 
		p3.style.opacity = "0";
		p4.style.opacity = "1"; 
		p5.style.opacity = "0"; 
		p6.style.opacity = "0"; 
		p7.style.opacity = "0"; 

	}

	idValue = 1; 
	id.innerHTML = idValue;
	
};


	
var switchRight = document.getElementById("switchRight");
var id = document.getElementById("id");

// button.addEventListener("click", () => switchPlanet(idValue));


var typeTelluric = document.getElementById("telluric");
var typeGas = document.getElementById("gas");

function switchPlanet(idValue) {
	idValue = id.innerHTML; 
	idValue = parseInt(idValue);

	var p1 = document.getElementById("planetChosen");
	var p2 = document.getElementById("planetChosen1");
	var p3 = document.getElementById("planetChosen2");
	var p4 = document.getElementById("planetChosen3");
	var p5 = document.getElementById("planetChosen4");
	var p6 = document.getElementById("planetChosen5");
	var p7 = document.getElementById("planetChosen6");


	if (typeGas.checked) {



		if (idValue == 0) {

			p1.style.opacity = "1";

			p1.style.animationName = "rotate";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.opacity = "0";
			
			p3.style.animationName = "none";

			p4.style.opacity = "0";

			p4.style.animationName = "none";

			p5.style.opacity = "0";

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 

			p6.style.animationName = "none";

			p7.style.opacity = "0";

			p7.style.animationName = "none";

		}

		else if (idValue == 1) {
			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "1"; 

			p2.style.animationName = "rotate";

			p3.style.opacity = "0";

			p3.style.animationName = "none";

			p4.style.opacity = "0"; 

			p4.style.animationName = "none";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 

			p6.style.animationName = "none";

			p7.style.opacity = "0";

			p7.style.animationName = "none";

		}

		else if (idValue == 2) {
			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.opacity = "1";

			p3.style.animationName = "rotate";

			p4.style.opacity = "0"; 

			p4.style.animationName = "none";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 
			
			p6.style.animationName = "none";

			p7.style.opacity = "0";
		
			p7.style.animationName = "none";

		}

		else if (idValue == 3) {
			idValue = 0; 

			p1.style.opacity = "1"; 

			p1.style.animationName = "rotate";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.opacity = "0";

			p3.style.animationName = "none";

			p4.style.opacity = "0"; 

			p4.style.animationName = "none";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 
			
			p6.style.animationName = "none";

			p7.style.opacity = "0";
		
			p7.style.animationName = "none";
		}

		idValue++; 
	}





	else if (typeTelluric.checked) {


		if (idValue == 0) {
			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.opacity = "0";

			p3.style.animationName = "none";

			p4.style.opacity = "1"; 

			p4.style.animationName = "rotate";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 
			
			p6.style.animationName = "none";

			p7.style.opacity = "0";
		
			p7.style.animationName = "none";
		}

		else if (idValue == 1) {
			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.opacity = "0";

			p3.style.animationName = "none";

			p4.style.opacity = "0"; 

			p4.style.animationName = "none";

			p5.style.opacity = "1"; 

			p5.style.animationName = "rotate";

			p6.style.opacity = "0"; 
			
			p6.style.animationName = "none";

			p7.style.opacity = "0";
		
			p7.style.animationName = "none";
		}

		else if (idValue == 2) {
			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.opacity = "0";

			p3.style.animationName = "none";

			p4.style.opacity = "0"; 

			p4.style.animationName = "none";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none";

			p6.style.opacity = "1"; 
			
			p6.style.animationName = "rotate";

			p7.style.opacity = "0";
		
			p7.style.animationName = "none";
		}

		else if (idValue == 3) {
		p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.opacity = "0";

			p3.style.animationName = "none";

			p4.style.opacity = "0"; 

			p4.style.animationName = "none";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 
			
			p6.style.animationName = "none";

			p7.style.opacity = "1";
		
			p7.style.animationName = "rotate";
		}

		else if (idValue == 4) {

			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none"; 

			p3.style.opacity = "0"; 

			p3.style.animationName = "none"; 

			p4.style.opacity = "1";
			
			p4.style.animationName = "rotate";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 

			p6.style.animationName = "none";

			p7.style.opacity = "0";

			p7.style.animationName = "none";

			idValue = 0;
		};

		idValue++; 

	}

	
	id.innerHTML = idValue;

};



var switchLeft = document.getElementById("switchLeft");

function switchPlanetless(idValue) {
	idValue = id.innerHTML; 
	idValue = parseInt(idValue);

	var p1 = document.getElementById("planetChosen");
	var p2 = document.getElementById("planetChosen1");
	var p3 = document.getElementById("planetChosen2");
	var p4 = document.getElementById("planetChosen3");
	var p5 = document.getElementById("planetChosen4");
	var p6 = document.getElementById("planetChosen5");
	var p7 = document.getElementById("planetChosen6");


	if (typeGas.checked) {



		if (idValue == 1) {

			p1.style.opacity = "0";

			p1.style.animationName = "none";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.opacity = "1";

			p3.style.animationName = "rotate";

			p4.style.opacity = "0";

			p4.style.animationName = "none";

			p5.style.opacity = "0";

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 

			p6.style.animationName = "none";

			p7.style.opacity = "0";

			p7.style.animationName = "none";

			idValue = 4; 


		}

		else if (idValue == 2) {
			p1.style.opacity = "1"; 

			p1.style.animationName ="rotate";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none"; 

			p3.style.opacity = "0";

			p3.style.animationName = "none"; 

			p4.style.opacity = "0"; 

			p4.style.animationName = "none";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none"; 

			p6.style.opacity = "0";

			p6.style.animationName = "none";

			p7.style.opacity = "0";

			p7.style.animationName ="none"
		}

		else if (idValue == 3) {
			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "1"; 

			p2.style.animationName = "rotate";

			p3.style.opacity = "0";

			p3.style.animationName = "none";

			p4.style.opacity = "0"; 

			p4.style.animationName = "none";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 

			p6.style.animationName = "none"; 

			p7.style.opacity = "0";

			p7.style.animationName = "none";
		}

		idValue--; 
	}





	else if (typeTelluric.checked) {

		if (idValue == 1) {
			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.opacity = "0";

			p3.style.animationName = "none";

			p4.style.opacity = "0";

			p4.style.animationName = "none";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 

			p6.style.animationName = "none";

			p7.style.opacity = "1";

			p7.style.animationName = "rotate";

			idValue = 5;
		}

		else if (idValue == 2) {
			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "0";

			p2.style.animationName = "none";

			p3.style.opacity = "0"; 

			p3.style.animationName = "none";

			p4.style.opacity = "1"; 

			p4.style.animationName = "rotate";

			p5.style.opacity = "0"; 

			p5.style.animationName = "none";

			p6.style.opacity = "0"; 

			p6.style.animationName = "none";

			p7.style.opacity = "0"; 

			p7.style.animationName = "none";
		}

		else if (idValue == 3) {
			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.opacity = "0"; 

			p3.style.animationName = "none";

			p4.style.opacity = "0";

			p4.style.animationName = "none";

			p5.style.opacity = "1";

			p5.style.animationName = "rotate";

			p6.style.opacity = "0"; 

			p6.style.animationName = "none";

			p7.style.opacity = "0"; 

			p7.style.animationName = "none";
		}

		else if (idValue == 4) {
			p1.style.opacity = "0"; 

			p1.style.animationName = "none";

			p2.style.opacity = "0"; 

			p2.style.animationName = "none";

			p3.style.animationName = "none";

			p4.style.opacity = "0";

			p4.style.animationName = "none";

			p5.style.opacity = "0";

			p5.style.animationName = "none";

			p6.style.opacity = "1"; 

			p6.style.animationName = "rotate";

			p7.style.opacity = "0"; 

			p7.style.animationName = "none";
		}

		idValue--; 

	}

	
	id.innerHTML = idValue;

};


var moon1chosen = document.getElementById("stylea1");
var moon2chosen = document.getElementById("stylea2");
var moon3chosen = document.getElementById("stylea3");
var moon4chosen = document.getElementById("stylea4");

var moon1chosenB = document.getElementById("styleb1");
var moon2chosenB = document.getElementById("styleb2");
var moon3chosenB = document.getElementById("styleb3");
var moon4chosenB = document.getElementById("styleb4");

var moon1chosenC = document.getElementById("stylec1");
var moon2chosenC = document.getElementById("stylec2");
var moon3chosenC = document.getElementById("stylec3");
var moon4chosenC = document.getElementById("stylec4");


var arrow1 = document.getElementById("arrow1");
var arrow2 = document.getElementById("arrow2");
var arrow3 = document.getElementById("arrow3");

function moonSet(value) {
	var moonNumber = document.getElementById("moonNumber");
	var moonNumberWanted = document.getElementById("numberOfMoon");

	var moonSelect1 = document.getElementById("moonSelect1");
	var moonSelect2 = document.getElementById("moonSelect2");
	var moonSelect3 = document.getElementById("moonSelect3");

	var moonSelector1 = document.getElementById("moonstylea1");
	var moonSelector2 = document.getElementById("moonstyleb2");
	var moonSelector3 = document.getElementById("moonstylec3");

	var moonName1 = document.getElementById("moon1Name");
	var moonName2 = document.getElementById("moon2Name");
	var moonName3 = document.getElementById("moon3Name");

	var moonSelection1 = document.getElementById("moonstylea1");
	var moonSelection2 = document.getElementById("moonstyleb2");
	var moonSelection3 = document.getElementById("moonstylec3"); 



	if (value < 0) {
		moonNumberWanted.value = "0";
		moonNumber.innerHTML = "0";

		moonSelect1.style.opacity = "0";
		moonSelect2.style.opacity = "0";
		moonSelect3.style.opacity = "0";

		moonSelector1.setAttribute("disabled" , "disabled");
		moonName1.setAttribute("disabled" , "disabled");

		moonSelector2.setAttribute("disabled" , "disabled");
		moonName2.setAttribute("disabled" , "disabled");

		moonSelector3.setAttribute("disabled" , "disabled");
		moonName3.setAttribute("disabled" , "disabled");

		var moon1 = document.getElementsByClassName("moon1"); 
		var i;
		for (i = 0; i < moon1.length; i++){
			moon1[i].style.opacity = "0";
		}

		var moon2 = document.getElementsByClassName("moon2"); 
		var i1;
		for (i1 = 0; i1 < moon2.length; i1++) {
			moon2[i1].style.opacity = "0";
		}

		var moon3 = document.getElementsByClassName("moon3"); 
		var i2;
		for (i2 = 0; i2 < moon3.length; i2++) {
			moon3[i2].style.opacity = "0";
		}

		document.getElementById("planetSide").style.width = "20vw;";

		arrow1.style.opacity = "0";
		arrow1.style.animationName = "none";

		arrow2.style.opacity = "0";
		arrow2.style.animationName = "none";

		arrow3.style.opacity = "0";
		arrow3.style.animationName = "none";
	}

	else if (value > 3) {
		moonNumberWanted.value = "3";
		moonNumber.innerHTML = "3";

		moonSelect1.style.opacity = "1";
		moonSelect2.style.opacity = "1";
		moonSelect3.style.opacity = "1"; 

		moonSelector1.removeAttribute("disabled");
		moonName1.removeAttribute("disabled");
		moonSelection1.value = "moon1Style1";



		moonSelector2.removeAttribute("disabled");
		moonName2.removeAttribute("disabled");
		moonSelection2.value = "moon2Style2";


		moonSelector3.removeAttribute("disabled");
		moonName3.removeAttribute("disabled");
		moonSelection3.value  = "moon3Style3";

		document.getElementById("moon1Style1").style.opacity = "1";
		document.getElementById("moon2Style2").style.opacity = "1";
		document.getElementById("moon3Style3").style.opacity = "1";

		document.getElementById("styleb1").setAttribute("disabled", "disabled");
		document.getElementById("stylec1").setAttribute("disabled", "disabled");

		document.getElementById("stylea2").setAttribute("disabled", "disabled");
		document.getElementById("stylec2").setAttribute("disabled", "disabled");

		document.getElementById("stylea3").setAttribute("disabled", "disabled");
		document.getElementById("styleb3").setAttribute("disabled", "disabled");


		
		moon4chosen.removeAttribute("disabled");
		moon4chosenB.removeAttribute("disabled");
		moon4chosenC.removeAttribute("disabled");

		document.getElementById("nameWrittenMoon1").style.opacity = "1";
		document.getElementById("nameWrittenMoon2").style.opacity = "1";
		document.getElementById("nameWrittenMoon3").style.opacity = "1";
		document.getElementById("planetSide").style.width = "25vw";

		arrow1.style.opacity = "1";
		arrow1.style.animationName = "grow1";

		arrow2.style.opacity = "1";
		arrow2.style.animationName = "grow2";

		arrow3.style.opacity = "1";
		arrow3.style.animationName = "grow3";

	}

	else {
		moonNumberWanted.value = Math.round(value);
		moonNumber.innerHTML = Math.round(value); 

		if (value == 1) {
			moonSelect1.style.opacity = "1";
			moonSelect2.style.opacity = "0";
			moonSelect3.style.opacity = "0";

			moonSelector1.removeAttribute("disabled");
			moonName1.removeAttribute("disabled");
			moonSelection1.value = "moon1Style1";

			moonSelector2.setAttribute("disabled" , "disabled");
			moonName2.setAttribute("disabled" , "disabled");

			moonSelector3.setAttribute("disabled" , "disabled");
			moonName3.setAttribute("disabled" , "disabled");

			
			document.getElementById("styleb1").removeAttribute("disabled");
			document.getElementById("stylec1").removeAttribute("disabled");

			document.getElementById("stylea2").removeAttribute("disabled");
			document.getElementById("stylec2").removeAttribute("disabled");

			document.getElementById("stylea3").removeAttribute("disabled");
			document.getElementById("styleb3").removeAttribute("disabled");


			var moon2 = document.getElementsByClassName("moon2"); 


			var i;
			for (i = 0; i < moon2.length; i++) {
				moon2[i].style.opacity = "0";
			}

			var moon3 = document.getElementsByClassName("moon3"); 
			var i1;
			for (i1 = 0; i1 < moon3.length; i1++) {
				moon3[i1].style.opacity = "0";
			}


			var moon1 = document.getElementsByClassName("moon1");
			var i2; 
			for (i2 = 0; i2 < moon1.length; i2++){
				moon1[i2].style.opacity = "0"; 

			}

			document.getElementById("moon1Style1").style.opacity = "1";

			moon4chosen.removeAttribute("disabled");
			moon4chosenB.removeAttribute("disabled");
			moon4chosenC.removeAttribute("disabled");

			moonSelection1.value = "moon1Style1";
			moonSelection2.value = "moon2Style2";
			moonSelection3.value = "moon3Style3";

			document.getElementById("nameWrittenMoon1").style.opacity = '1';
			document.getElementById("nameWrittenMoon2").style.opacity = '0';
			document.getElementById("nameWrittenMoon3").style.opacity = '0';

			document.getElementById("planetSide").style.width = "25vw";

			arrow1.style.opacity = "1";
			arrow1.style.animationName = "grow1";

			arrow2.style.opacity = "0";
			arrow2.style.animationName = "none";

			arrow3.style.opacity = "0";
			arrow3.style.animationName = "none";


		}

		else if(value == 2) {
			moonSelect1.style.opacity = "1";
			moonSelect2.style.opacity = "1";
			moonSelect3.style.opacity = "0";

			moonSelector1.removeAttribute("disabled");
			moonName1.removeAttribute("disabled");
			moonSelection1.value = "moon1Style1";


			moonSelector2.removeAttribute("disabled");
			moonName2.removeAttribute("disabled");
			moonSelection2.value = "moon2Style2";

			moonSelector3.setAttribute("disabled" , "disabled");
			moonName3.setAttribute("disabled" , "disabled");
			moonSelection3.value = "moon3Style3";


			var moon3 = document.getElementsByClassName("moon3"); 
			var i;
			for (i = 0; i < moon3.length; i++) {
				moon3[i].style.opacity = "0";
			};			


			var moon2 = document.getElementsByClassName("moon2"); 
			var i1;
			for (i1 = 0; i1 < moon2.length; i1++) {
				moon2[i1].style.opacity = "0";
			}


			var moon1 = document.getElementsByClassName("moon1");
			var i2; 
			for (i2 = 0; i2 < moon1.length; i2++){
				moon1[i2].style.opacity = "0"; 

			}

			document.getElementById("moon1Style1").style.opacity = "1";
			document.getElementById("moon2Style2").style.opacity = "1";


			document.getElementById("styleb1").setAttribute("disabled", "disabled");
			document.getElementById("stylea2").setAttribute("disabled", "disabled");

			document.getElementById("stylec1").removeAttribute("disabled");		
			document.getElementById("stylec2").removeAttribute("disabled");

			document.getElementById("stylea3").removeAttribute("disabled");
			document.getElementById("styleb3").removeAttribute("disabled");

			document.getElementById("styleb2").removeAttribute("disabled");
			



			moon4chosenC.removeAttribute("disabled");
			moon4chosenB.removeAttribute("disabled");
			moon4chosen.removeAttribute("disabled");

			document.getElementById("nameWrittenMoon1").style.opacity = '1';
			document.getElementById("nameWrittenMoon2").style.opacity = '1';
			document.getElementById("nameWrittenMoon3").style.opacity = '0';

			document.getElementById("planetSide").style.width = "25vw";

			arrow1.style.opacity = "1";
			arrow1.style.animationName = "grow1";

			arrow2.style.opacity = "1";
			arrow2.style.animationName = "grow2";

			arrow3.style.opacity = "0";
			arrow3.style.animationName ="none";
		}

		else if(value == 3) {
			moonSelect1.style.opacity = "1";
			moonSelect2.style.opacity = "1";
			moonSelect3.style.opacity = "1"; 

			moonSelector1.removeAttribute("disabled");
			moonName1.removeAttribute("disabled");
			moonSelection1.value = "moon1Style1";



			moonSelector2.removeAttribute("disabled");
			moonName2.removeAttribute("disabled");
			moonSelection2.value = "moon2Style2";


			moonSelector3.removeAttribute("disabled");
			moonName3.removeAttribute("disabled");
			moonSelection3.value  = "moon3Style3";

			document.getElementById("moon1Style1").style.opacity = "1";
			document.getElementById("moon2Style2").style.opacity = "1";
			document.getElementById("moon3Style3").style.opacity = "1";

			document.getElementById("styleb1").setAttribute("disabled", "disabled");
			document.getElementById("stylec1").setAttribute("disabled", "disabled");

			document.getElementById("stylea2").setAttribute("disabled", "disabled");
			document.getElementById("stylec2").setAttribute("disabled", "disabled");

			document.getElementById("stylea3").setAttribute("disabled", "disabled");
			document.getElementById("styleb3").setAttribute("disabled", "disabled");


			
			moon4chosen.removeAttribute("disabled");
			moon4chosenB.removeAttribute("disabled");
			moon4chosenC.removeAttribute("disabled");

			document.getElementById("nameWrittenMoon1").style.opacity = "1";
			document.getElementById("nameWrittenMoon2").style.opacity = "1";
			document.getElementById("nameWrittenMoon3").style.opacity = "1";
			document.getElementById("planetSide").style.width = "25vw";

			arrow1.style.opacity = "1";
			arrow1.style.animationName = "grow1";

			arrow2.style.opacity = "1";
			arrow2.style.animationName = "grow2";

			arrow3.style.opacity = "1";
			arrow3.style.animationName = "grow3";
		}

		else {
			moonSelect1.style.opacity = "0";
			moonSelect2.style.opacity = "0";
			moonSelect3.style.opacity = "0";

			moonSelector1.setAttribute("disabled" , "disabled");
			moonName1.setAttribute("disabled" , "disabled");

			moonSelector2.setAttribute("disabled" , "disabled");
			moonName2.setAttribute("disabled" , "disabled");

			moonSelector3.setAttribute("disabled" , "disabled");
			moonName3.setAttribute("disabled" , "disabled");


			var moon1 = document.getElementsByClassName("moon1"); 
			var i; 
			for (i = 0; i < moon1.length; i++) {
				moon1[i].style.opacity = "0";
			}
			var moon2 = document.getElementsByClassName("moon2"); 
			var i1; 
			for (i1 = 0; i1 < moon2.length; i1++) {
				moon2[i1].style.opacity = "0";
			}
			var moon3 = document.getElementsByClassName("moon3"); 
			var i2; 
			for (i2 = 0; i2 < moon3.length; i2++) {
				moon3[i2].style.opacity = "0";
			}

			moonSelection3.value  = "moon3Style3";
			moonSelection1.value = "moon1Style1";
			moonSelection2.value = "moon2Style2";

			document.getElementById("nameWrittenMoon1").style.opacity = '0';
			document.getElementById("nameWrittenMoon3").style.opacity = '0';
			document.getElementById("nameWrittenMoon2").style.opacity = '0';	

			document.getElementById("planetSide").style.width = "20vw";

					arrow1.style.opacity = "0";
		arrow1.style.animationName = "none";

		arrow2.style.opacity = "0";
		arrow2.style.animationName = "none";

		arrow3.style.opacity = "0";
		arrow3.style.animationName = "none";
		}


		moon4chosenC.removeAttribute("disabled");
		moon4chosenB.removeAttribute("disabled");
		moon4chosen.removeAttribute("disabled");




	}
};



function moonSelection(id) {

	var moon1 = document.getElementsByClassName("moon1"); 
	var i;
	for (i = 0; i < moon1.length; i++) {
		moon1[i].style.opacity = "0";
	}

	var moonSelected = document.getElementById(id);
	moonSelected.style.opacity = "1";



	var moonStyleSelector = document.getElementById("moonstylea1");
	var moonStyleSelector2 = document.getElementById("moonstyleb2");
	var moonStyleSelector3 = document.getElementById("moonstylec3");


	if (id == "moon1Style1") {
		moon1chosenB.setAttribute("disabled", "disabled");
		moon1chosenC.setAttribute("disabled", "disabled")
	} else if ((moonStyleSelector3.value != "moon1Style3") && (moonStyleSelector2.value != "moon1Style2")) {
		moon1chosenB.removeAttribute("disabled");
		moon1chosenC.removeAttribute("disabled");
	};

	if (id == "moon2Style1") {
		moon2chosenB.setAttribute("disabled", "disabled");
		moon2chosenC.setAttribute("disabled", "disabled")
	} else if ((moonStyleSelector3.value != "moon2Style3") && (moonStyleSelector2.value != "moon2Style2")){
		moon2chosenB.removeAttribute("disabled");
		moon2chosenC.removeAttribute("disabled");
	};

	if (id == "moon3Style1") {
		moon3chosenB.setAttribute("disabled", "disabled");
		moon3chosenC.setAttribute("disabled", "disabled")
	} else if ((moonStyleSelector3.value != "moon3Style3") && (moonStyleSelector2.value != "moon3Style2")){
		moon3chosenB.removeAttribute("disabled");
		moon3chosenC.removeAttribute("disabled");
	};

	if (id == "moon4Style1") {
		moon4chosenB.setAttribute("disabled", "disabled");
		moon4chosenC.setAttribute("disabled", "disabled");
	} else if ((moonStyleSelector3.value != "moon4Style3") && (moonStyleSelector2.value != "moon4Style2")){
		moon4chosenB.removeAttribute("disabled");
		moon4chosenC.removeAttribute("disabled");
	};
}


function moonSelection2(id) {

	var moon2 = document.getElementsByClassName("moon2"); 
	var i;
	for (i = 0; i < moon2.length; i++) {
		moon2[i].style.opacity = "0";
	}

	var moonSelected = document.getElementById(id);
	moonSelected.style.opacity = "1";

	var moonStyleSelector = document.getElementById("moonstylea1");
	var moonStyleSelector2 = document.getElementById("moonstyleb2");
	var moonStyleSelector3 = document.getElementById("moonstylec3");
	if (id == "moon1Style2") {
		moon1chosen.setAttribute("disabled", "disabled");
		moon1chosenC.setAttribute("disabled", "disabled")
	} else if ((moonStyleSelector3.value != "moon1Style3") && (moonStyleSelector.value != "moon1Style1")) {
		moon1chosen.removeAttribute("disabled");
		moon1chosenC.removeAttribute("disabled");
	};

	if (id == "moon2Style2") {
		moon2chosen.setAttribute("disabled", "disabled");
		moon2chosenC.setAttribute("disabled", "disabled")
	} else if ((moonStyleSelector3.value != "moon2Style3") && (moonStyleSelector.value != "moon2Style1")) {
		moon2chosen.removeAttribute("disabled");
		moon2chosenC.removeAttribute("disabled");
	};

	if (id == "moon3Style2") {
		moon3chosen.setAttribute("disabled", "disabled");
		moon3chosenC.setAttribute("disabled", "disabled");
	} else if ((moonStyleSelector3.value != "moon3Style3") && (moonStyleSelector.value != "moon3Style1")) {
		moon3chosen.removeAttribute("disabled");
		moon3chosenC.removeAttribute("disabled");
	};

	if (id == "moon4Style2") {
		moon4chosen.setAttribute("disabled", "disabled");
		moon4chosenC.setAttribute("disabled", "disabled");
	} else if ((moonStyleSelector3.value != "moon4Style3") && (moonStyleSelector.value != "moon4Style1")) {
		moon4chosen.removeAttribute("disabled");
		moon4chosenC.removeAttribute("disabled");
	}
}

function moonSelection3(id) {

	var moon3 = document.getElementsByClassName("moon3"); 
	var i;
	for (i = 0; i < moon3.length; i++) {
		moon3[i].style.opacity = "0";
	}

	var moonSelected = document.getElementById(id);
	moonSelected.style.opacity = "1";

	
	var moonStyleSelector = document.getElementById("moonstylea1");
	var moonStyleSelector2 = document.getElementById("moonstyleb2");
	var moonStyleSelector3 = document.getElementById("moonstylec3");


	if (id == "moon1Style3") {
		moon1chosen.setAttribute("disabled","disabled");
		moon1chosenB.setAttribute("disabled", "disabled");
	} else if ((moonStyleSelector2.value != "moon1Style2") && (moonStyleSelector.value != "moon1Style1")) {
		moon1chosen.removeAttribute("disabled");
		moon1chosenB.removeAttribute("disabled");
	};

	if (id == "moon2Style3") {
		moon2chosen.setAttribute("disabled", "disabled");
		moon2chosenB.setAttribute("disabled", "disabled");
	} else if ((moonStyleSelector2.value != "moon2Style2") && (moonStyleSelector.value != "moon2Style1")) {
		moon2chosen.removeAttribute("disabled");
		moon2chosenB.removeAttribute("disabled");
	};

	if (id == "moon3Style3") {
		moon3chosen.setAttribute("disabled", "disabled");
		moon3chosenB.setAttribute("disabled", "disabled");
	} else if ((moonStyleSelector2.value != "moon3Style2") && (moonStyleSelector.value != "moon3Style1")) {
		moon3chosen.removeAttribute("disabled");
		moon3chosenB.removeAttribute("disabled");
	};

	if ( id == "moon4Style3") {
		moon4chosen.setAttribute("disabled", "disabled");
		moon4chosenB.setAttribute("disabled", "disabled");
	} else if ((moonStyleSelector2.value != "moon4Style2") && (moonStyleSelector.value != "moon4Style1")) {
		moon4chosen.removeAttribute("disabled");
		moon4chosenB.removeAttribute("disabled");
	}


}


function writeMoon1Name(value) {
	var name = document.getElementById("nameWrittenMoon1");
	name.innerHTML = "";
	name.style.textTransform = "uppercase";
	name.style.fontWeight = "300";
	letters = value.split("");
	loopValue = 0;
	for ( i = 0; i < letters.length; i ++ ){
		if ( i == 0 ) {
			value = 1; 
			name.innerHTML = "<span style = 'color: red'>" + letters[i] + "</span>";
		}
		else if ( ( i > 0 ) && ( value == 1) ) {
			name.innerHTML += letters[i];
		}
	}
}

function writeMoon2Name(value) {
	var name = document.getElementById("nameWrittenMoon2");
	name.innerHTML = "";
	name.style.textTransform = "uppercase";
	name.style.fontWeight = "300";
	letters = value.split("");
	loopValue = 0; 
	for ( i = 0; i  < letters.length; i ++ ) {
		if ( i == 0 ) {
			value = 1; 
			name.innerHTML = "<span style = 'color: red'>" + letters[i] + "</span>";
		}
		else if ( ( i > 0 ) && ( value == 1) ) {
			name.innerHTML += letters[i];
		}
	};
}
		
function writeMoon3Name(value) {
	var name = document.getElementById("nameWrittenMoon3");
	name.innerHTML = "";
	name.style.textTransform = "uppercase";
	name.style.fontWeight = "300";
	letters = value.split("");
	loopValue = 0; 
	for ( i = 0; i  < letters.length; i ++ ) {
		if ( i == 0 ) {
			value = 1; 
			name.innerHTML = "<span style = 'color: red'>" + letters[i] + "</span>";
		}
		else if ( ( i > 0 ) && ( value == 1) ) {
			name.innerHTML += letters[i];
		}
	};
}


function writeSunName(value) {
	var name = document.getElementById("nameWrittenSun");
	name.innerHTML = "";
	name.style.textTransform = "uppercase";
	name.style.fontWight = "300";
	letters = value.split("");
	loopValue = 0; 
	for ( i = 0; i  < letters.length; i ++ ) {
		if ( i == 0 ) {
			value = 1; 
			name.innerHTML = "<span style = 'color: red'>" + letters[i] + "</span>"
		}
		else if ( ( i > 0 ) && ( value == 1) ) {
			name.innerHTML += letters[i];
		}
	};
}

function putSun(idSun) {
	var sun = document.getElementsByClassName("sun");
	var i;
	for (i = 0; i < sun.length; i++){
		sun[i].style.opacity = "0";
		sun[i].style.animationName = "none";
		sun[i].style.transform = "scale(0.5)";
	}

	document.getElementById(idSun).style.opacity = "1";
	document.getElementById(idSun).style.animationName = "sunRotate";
}
