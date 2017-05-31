//=====================================================================================
//Global Varibles
var yourNumber = 0;
var yourGuess = 0;
var guessTotal = 0;

//counters
var wins = 0;
var losses = 0;




//=====================================================================================
//Functions
function start(){
	//computer picks a yourNumber
	yourNumber = Math.floor((Math.random()*102)+19);
	console.log(yourNumber);
	$(".yourNumber").html(yourNumber);

	//Crystals get a yourNumber assigned to them
	var blue = Math.floor((Math.random() *12) + 1);
	var red = Math.floor((Math.random() *12) + 1);
	var purple = Math.floor((Math.random() *12) + 1);
	var green = Math.floor((Math.random() *12) + 1);


	//Your guess 
	var guessTotal = 0;

	//click events for each crystal
	$(".blueCrystal").click(function() {
		update(blue);
		console.log(blue);
	});

	$(".greenCrystal").click(function() {
		update(green);
		console.log(green);
	})

	$(".redCrystal").click(function() {
		update(red);
		console.log(red);
	})
	$(".purpleCrystal").click(function() {
		update(purple);
		console.log(purple);
	});
}



function update(color) {
// update total guess
	guessTotal +=color;
	console.log("total",guessTotal);
	//removes the old total and replaces the new total
	$(".yourGuess").empty();
	$(".yourGuess").append(guessTotal);
	//check to see if you win or lose
	if (guessTotal > yourNumber) {
		//adds a loss
		losses++
		//displays updated losses.
		$("#losses").html(losses);
		//Calls the reset function to reset the game.
		reset();



	} else if(guessTotal == yourNumber) {
			//adds win
			wins++;
			$("#wins").html(wins);

			reset();

		};

};

function reset() {
	Yournumber = Math.floor((Math.random() * 102) +19);
	$(".yourNumber").html(yourNumber);

	var blue = Math.floor((Math.random() *12) + 1);
	var red = Math.floor((Math.random() *12) + 1);
	var puple = Math.floor((Math.random() *12) + 1);
	var green = Math.floor((Math.random() *12) + 1);

};



//==================================================================================================
//Main Process


start();


$(".yourGuess").html(yourGuess);