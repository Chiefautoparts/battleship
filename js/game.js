'use strict';

function game() {
  var playerOne = input();
  var playerTwo = input();
  var oneDisplay = document.getElementById('playerOne');
  var twoDisplay = document.getElementById('playerTwo');
  var displayHit = alert('That was a hit!');
  var displayMiss = alert('That was a miss!');
  var sunkShip = alert('You sunk my ' + shipType);
  var typeShip = ['Battleship', 'Cruiser', 'Destroyer', 'Patrol', 'Carrier'];

  function gameBoard() {
  	for(var col = 0; col < 11; col++){
  		for(var row = 0; row < 11; row++){
  			boad.push([col,row]);
  		};
  	};
  };
}
