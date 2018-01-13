var css = document.querySelector("h3");
var color1 = document.querySelector(".color1");
var color2 = document.querySelector(".color2");
var body = document.getElementById("gradient");
var btn = document.querySelector("#lucky");
var randomColor = [];

window.onload = pageLoadedReadyToGo;

function pageLoadedReadyToGo() {
	setGradient();
}



console.log(css);
console.log(color1);
console.log(color2);
function setGradient() {
	body.style.background = "linear-gradient(to right, " + 
	color1.value + ", " + color2.value + ")";

	css.textContent = body.style.background + ";";
}

// this function will randomly generate 6 numbers 0-255 and push 
//them to randomColor array and call the surprise function which will do the trick
function createRandomColor(){
	while (randomColor.length <= 6) {
		randomColor.push(Math.floor(Math.random()*256));
	}
	surpriseMe();
}
function surpriseMe() {
	
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