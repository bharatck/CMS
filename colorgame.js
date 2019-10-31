var numSquares = 6;
var colors = generateRandomColor(numSquares);

var squares = document.getElementsByClassName("square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay"); 
var message = document.querySelector("#message");
var h1 = document.querySelector("h1");
var reset = document.querySelector("#reset");
var easy = document.querySelector("#easy");
var hard = document.querySelector("#hard");


easy.addEventListener("click",function(){
	// x=3;
	console.log("easy");
	numSquares = 3;
	easy.classList.add("selected");
	hard.classList.remove("selected");
	colors = generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	//colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
{
	if(colors[i])
	{
 	squares[i].style.background=colors[i];}
 		
 	else{
	squares[i].style.display = "none";
}
}
}
);
hard.addEventListener("click",function(){
 	console.log("hard");
 	easy.classList.remove("selected");
 	hard.classList.add("selected");
 	numSquares = 6;
 	colors = generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	//colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
	{
	
 	squares[i].style.background=colors[i];
	squares[i].style.display = "block";
}

 });

reset.addEventListener("click",function(){
	console.log("reset colors");
	colors=generateRandomColor(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;
	for(var i=0;i<squares.length;i++)
{
 	squares[i].style.background=colors[i];}
 	h1.style.background = "black";

})
colorDisplay.textContent = pickedColor;



for(var i=0;i<squares.length;i++)
{
 	squares[i].style.background=colors[i];

	squares[i].addEventListener("click",function(){
	var clickedColor =this.style.background;
	if(clickedColor===pickedColor)
	{
		// alert("correct");
		message.textContent="correct!";
		changeColors(pickedColor);
		h1.style.background = clickedColor;
		reset.textContent="play again?"

	}else
	{
		// alert("wrong");
		this.style.background = "black";
		message.textContent="try again";
	}
	});
}


function changeColors(color){
	for(var j=0;j<squares.length;j++)
		{
			squares[j].style.background = color;
		}
}
function pickColor(){
	var random=Math.floor(Math.random() * colors.length);
	return colors[random];
}

function generateRandomColor(num){
	var arr=[];
	for(var i=0;i<num;i++){
		arr.push(randomColor());

	}
	return arr;
}


function randomColor(){
	var r=Math.floor(Math.random() *256);
	var g=Math.floor(Math.random() *256);
	var b=Math.floor(Math.random() *256);
	return "rgb(" +r+", "+g+", "+b+")";
}
