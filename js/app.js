console.log('Hello frontend');

var board = document.getElementById('board');

var playerOnePlaying = true;

//board.addEventListener('click', changeBGColor);
  
var squares = document.querySelectorAll("div.square");

for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", changeBGColor)
	squares[i].hasBeenClicked = false;
}
  
function changeBGColor(){
	if(!this.hasBeenClicked){
		if(playerOnePlaying){
	  		this.style.backgroundColor = "red";	
		}
		else{
			this.style.backgroundColor = "green";
		}
		this.hasBeenClicked = true;
		playerOnePlaying = !playerOnePlaying;
	}
}
