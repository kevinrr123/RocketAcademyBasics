var emojiNumberCharactersMain = function (input) {
  var i = 0;
  var myOutputValue = "";
  for (i = 1; i <= input; i++) {
    myOutputValue += "👍";
  }
  return myOutputValue;
};
// Complete the Base: Emoji Drawing Number of Characters exercise below with emojiNumberCharactersMain as the main function.
//input is a number
//output is emojis (number based on input)

var emojiSquareMain = function (input) {
  // Complete the Base: Emoji Drawing Square exercise below with emojiSquareMain as the main function.
  var i = 0;
  var j = 0;
  var myOutputValue = "";
  for (i = 1; i <= input; i++) {
    for (j = 1; j <= input; j++) {
      myOutputValue += "👍";
    }
    myOutputValue += `<br>`;
  }
  return myOutputValue;
};

var emojiTriangleMain = function (input) {
  // Complete the Comfortable: Emoji Drawing Triangle exercise below with emojiTriangleMain as the main function.
  var i = 0;
  var j = 0;
  var myOutputValue = "";
  for (i = 1; i <= input; i++) {
    for (j = 1; j <= i; j++) {
      myOutputValue += "👍";
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var emojiOutlineSquareMain = function (input) {
  var i = 0;
  var j = 0;
  var myOutputValue = "";
  for (i = 1; i <= input; i++) {
    for (j = 1; j <= input; j++) {
      if (j == 1 || j == input || i == 1 || i == input) {
        myOutputValue += "👍";
      } else {
        myOutputValue += "😁";
      }
    }
    myOutputValue += "<br>";
  }
  return myOutputValue;
};

var emojiCenterSquareMain = function (input) {
  var i = 0;
  var j = 0;
  var k = Math.floor((input + 1) / 2);
  var myOutputValue = "";
  if (input % 2 == 0 || input < 5) {
    return "Error! Please try again!";
  } else {
    for (i = 1; i <= input; i++) {
      for (j = 1; j <= input; j++) {
        if (j == 1 || j == input || i == 1 || i == input) {
          myOutputValue += "👍";
        } else if (j === k && i === k) {
          myOutputValue += "😜";
        } else {
          myOutputValue += "😁";
        }
      }
      myOutputValue += "<br>";
    }
  }
  return myOutputValue;
};

var multiDiceBaseMain = function (input) {
  // Complete the Base: Multi-Dice Game exercise below with multiDiceBaseMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiRoundMain = function (input) {
  // Complete the More Comfortable: Multi-Round Multi-Dice Game exercise below with multiDiceMultiRoundMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceTwoPlayerMain = function (input) {
  // Complete the More Comfortable: Two Player Multi-Round Multi-Dice Game exercise below with multiDiceTwoPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var multiDiceMultiPlayerMain = function (input) {
  // Complete the More Comfortable: Multi-Player Multi-Round Multi-Dice Game exercise below with multiDiceMultiPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
