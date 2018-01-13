var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("#lucky");
var randomColor = [];

window.onload = setGradient; // once the window is completely loaded it will execute this function

function setGradient() {
	body.style.background = "linear-gradient(to right, " + 
	color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

// this function will randomly generate 6 numbers 0-255 as for rgB(0-255, 0-255,0-255) and push 
//them to randomColor array then it will call the applyRandomColor
function createRandomColor(){
	while (randomColor.length <= 6) {
		randomColor.push(Math.floor(Math.random()*256));
	}
	applyRandomColor();
}
//this function will implement randomColor array to background: linear-gradient
function applyRandomColor() {
	
	body.style.background = "linear-gradient(to right, " +
	"rgb(" + randomColor[0] + ", " + randomColor[1] +
	 ", " + randomColor[2] + "), rgb("  + randomColor[3] +
	  ", " + randomColor[4] + ", " + randomColor[5] + ")";

	 css.textContent = body.style.background + ";";

	randomColor.splice(0, randomColor.length); 

}

color1.addEventListener("input", setGradient);
color2.addEventListener("input", setGradient);
btn.addEventListener("click", createRandomColor);
