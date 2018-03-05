var MatchGame = {};

/*
  Sets up a new game after HTML document has loaded.
  Renders a 4x4 board of cards.
*/

/*
  Generates and returns an array of matching card values.
 */

MatchGame.generateCardValues = function () {
   
    var sequence = [];
    
    for (var i = 1; i <= 8; i++) {
        sequence.push(i,i);
    }
    
    var cardValues = [];
    
    while (sequence.length > 0) {
       var randomIndex = Math.floor(Math.random() * sequence.length);
        var randomNumbers = sequence.splice(randomIndex, 1)[0];
        
        cardValues.push(randomNumbers);
    }
    
    return cardValues;
    //console.log(sequence);

};

/*
  Converts card values to jQuery card objects and adds them to the supplied game
  object.
*/

MatchGame.renderCards = function(cardValues, $game) {

};

/*
  Flips over a given card and checks to see if two cards are flipped over.
  Updates styles on flipped cards depending whether they are a match or not.
 */

MatchGame.flipCard = function($card, $game) {

};