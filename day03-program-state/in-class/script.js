var bottype = function () {
  var guessWords = [`banana`];

  var random = Math.floor(Math.random() * guessWords.length);

  var computerGuess = guessWords[random];
  return computerGuess;
};

var score = 0;

var secretWordBaseMain = function (input) {
  var mainComputerGuess = bottype();
  var myOutputValue = 0;
  if (input == mainComputerGuess) {
    score++;
    if (score == 2) {
      myOutputValue = `You Win. you reach the score of ${score}.`;
      score = 0;
      return myOutputValue;
    }
    myOutputValue = `You guessed correctly! Now you need another guess ${score}.`;
    return myOutputValue;
  } else {
    myOutputValue = "Wrong la, try again";
    return myOutputValue;
  }
};

var secretWordTwiceRowMain = function (input) {
  // Complete the Comfortable: Secret Word Twice in a Row exercise below with secretWordTwiceRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordXRowMain = function (input) {
  // Complete the Comfortable: Secret Word X in a Row exercise below with secretWordXRowMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithinMain = function (input) {
  // Complete the More Comfortable: Dice Within exercise below with diceWithinMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var diceWithin2DiceMain = function (input) {
  // Complete the More Comfortable: Dice Within with 2 Dice exercise below with diceWithin2DiceMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var dice4DMain = function (input) {
  // Complete the More Comfortable: Dice 4D exercise below with dice4DeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var secretWordTwice2Main = function (input) {
  // Complete the More Comfortable: Secret Word Twice in a Row 2 exercise below with secretWordTwice2Main as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
