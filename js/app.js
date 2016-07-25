console.log('Hello frontend');

var board = document.getElementById('board');

var playerOnePlaying = true;

var isWinnerDeclared = false;

var xSprite = "<b class=\"sprite\">X</b>";
var oSprite = "<b class=\"sprite\">O</b>";

//board.addEventListener('click', changeBGColor);
  
var squares = document.querySelectorAll("div.square");

for(var i = 0; i < squares.length; i++){
	squares[i].addEventListener("click", playMove)
	squares[i].hasBeenClicked = false;
	squares[i].markerValue = "";
}

document.querySelector("input[name=reset]").addEventListener('click', reset);
 
function checkWinner(markerVal){
	//check first row

	if(squares[0].markerValue == markerVal && squares[1].markerValue == markerVal && squares[2].markerValue == markerVal){
		console.log(markerVal,  "wins top row");
		declareWinner(markerVal);
	}

	if(squares[3].markerValue == markerVal && squares[4].markerValue == markerVal && squares[5].markerValue == markerVal){
		console.log(markerVal,  "wins mid row");
				declareWinner(markerVal);
	}

	if(squares[6].markerValue == markerVal && squares[7].markerValue == markerVal && squares[8].markerValue == markerVal){
		console.log(markerVal,  "wins bot row");
				declareWinner(markerVal);
	}

	if(squares[0].markerValue == markerVal && squares[3].markerValue == markerVal && squares[6].markerValue == markerVal){
		console.log(markerVal,  "wins left col");
				declareWinner(markerVal);
	}

	if(squares[1].markerValue == markerVal && squares[4].markerValue == markerVal && squares[7].markerValue == markerVal){
		console.log(markerVal,  "wins mid col");
				declareWinner(markerVal);
	}

	if(squares[2].markerValue == markerVal && squares[5].markerValue == markerVal && squares[8].markerValue == markerVal){
		console.log(markerVal,  "wins right col");
				declareWinner(markerVal);
	}

	if(squares[0].markerValue == markerVal && squares[4].markerValue == markerVal && squares[8].markerValue == markerVal){
		console.log(markerVal,  "wins left diag");
				declareWinner(markerVal);
	}

	if(squares[2].markerValue == markerVal && squares[4].markerValue == markerVal && squares[6].markerValue == markerVal){
		console.log(markerVal,  "wins right diag");
				declareWinner(markerVal);
	}



	//right diagonal


}

function declareWinner(winner){
	isWinnerDeclared = true;
}

function playMove(){
	if(!this.hasBeenClicked && !isWinnerDeclared){
		if(playerOnePlaying){
	  		this.style.backgroundColor = "red";	
	  		this.innerHTML = xSprite;
	  		this.markerValue = "X";
	  		checkWinner(this.markerValue);
		}
		else{
			this.style.backgroundColor = "green";
			this.innerHTML = oSprite;
			this.markerValue = "O";
			checkWinner(this.markerValue);
		}
		this.hasBeenClicked = true;
		playerOnePlaying = !playerOnePlaying;

		if(playerOnePlaying){
			document.querySelector("h3[id=turn]").innerHTML = "It's X's Turn";
		}
		else{
			document.querySelector("h3[id=turn]").innerHTML = "It's O's Turn";	
		}

		if(isWinnerDeclared){
			if (playerOnePlaying) {
				document.querySelector("h3[id=turn]").innerHTML = "O wins";
			}
			else{
				document.querySelector("h3[id=turn]").innerHTML = "X wins";
			}
		}

	}
}

function reset(){
	console.log('reset');
	for(var i = 0; i < squares.length; i++){
		squares[i].innerHTML = " ";
		squares[i].style.backgroundColor = "grey";
		squares[i].hasBeenClicked = false;
		squares[i].markerValue = "";
		playerOnePlaying = true;
		isWinnerDeclared = false;
		document.querySelector("h3[id=turn]").innerHTML = "It's X's Turn";
	}	
}


