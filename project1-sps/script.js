var sps = function () {
  var guessyours = [`scissors`, `paper`, `stone`];

  var random = Math.floor(Math.random() * guessyours.length);

  var computerGuess = guessyours[random];
  return computerGuess;
};
var main = function (input) {
  var mainComputerGuess = sps();
  var myOutputValue = 0;
  if (input == mainComputerGuess) {
    myOutputValue = `Draw try again.`;
    return myOutputValue;
  }
  if (input == `scissors`) {
    if (mainComputerGuess == `stone`) {
      myOutputValue = `Computer got ${mainComputerGuess}. You lose.`;
      return myOutputValue;
    } else if (mainComputerGuess == `paper`) {
      myOutputValue = `Computer got ${mainComputerGuess}. You win.`;
      return myOutputValue;
    }
  }

  if (input == `paper`) {
    if (mainComputerGuess == `scissors`) {
      myOutputValue = `Computer got ${mainComputerGuess}. You lose.`;
      return myOutputValue;
    } else if (mainComputerGuess == `stone`) {
      myOutputValue = `Computer got ${mainComputerGuess}. You win.`;
      return myOutputValue;
    }
  }

  if (input == `stone`) {
    if (mainComputerGuess == `paper`) {
      myOutputValue = `Computer got ${mainComputerGuess}. You lose.`;
      return myOutputValue;
    } else if (mainComputerGuess == `scissors`) {
      myOutputValue = `Computer got ${mainComputerGuess}. You win.`;
      return myOutputValue;
    }
  }
};
