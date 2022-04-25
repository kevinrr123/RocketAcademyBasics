var getRandomIndex = function (arrayLength) {
  // create a random number from zero to array length minus one.
  // this number is in the range from the first
  // index (zero) to the last index (array length minus one)
  var randomIndex = Math.floor(Math.random() * arrayLength);
  return randomIndex;
};

//declare global array variable for storing adjective
var words = [];
var myOutputValue = 0;

var madLibsAdjectivesMain = function (input) {
  if (input != "create") {
    words.push(input);
    myOutputValue = words;
    return myOutputValue;
  } else if (input == "create") {
    var random = Math.floor(Math.random() * words.length);
    //var random = getRandomIndex(words.length);
    var randomAdj = words[random];
    var madLib =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdj +
      " wife.";
    return madLib;
  }
  // Complete the Base: Mad Libs Adjectives exercise below with madLibsAdjectivesMain as the main function.

  //input is adjective
  //add adjective to array

  //generate a random adjective by using random index function

  //output is the completed Mad Lib sentence
  //if input is `create`, output the sentence with the random adjective
};

//declare global variable for the mode to be in normal mode
var mode = "normal";

var madLibsInputCreateMain = function (input) {
  // Complete the Comfortable: Input and Create Mode exercise below with madLibsInputCreateMain as the main function.

  // if mode is `normal`, user can input adjectives to the array
  // if mode is `create`, output the random generated word with the sentence

  // if the input is create, change the mode to 'create'

  if (input == "create") {
    mode = "create";
    return "You are now in create mode";
  } else if (mode == "create") {
    var random = getRandomIndex(words.length);
    var randomAdj = words[random];
    var madLib =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdj +
      " wife.";
    return madLib;
  } else if (mode == "normal") {
    words.push(input);
    myOutputValue = words;
    return myOutputValue;
  }
};

var madLibsMultipleWordsMain = function (input) {
  // Complete the Comfortable: Input Multiple Words exercise below with madLibsMultipleWordsMain as the main function.

  //split the words in the input and assign them to the words array

  if (input == "create") {
    mode = "create";
    return "You are now in create mode";
  } else if (mode == "create") {
    var random = getRandomIndex(words.length);
    var randomAdj = words[random];
    var madLib =
      '"WOW!" he said EXCITEDLY as he jumped into his convertible PAPAYA and drove off with his ' +
      randomAdj +
      " wife.";
    return madLib;
  } else if (mode == "normal") {
    words.push(input.split(` `));
    myOutputValue = words;
    return myOutputValue;
  }
};

var madLibsMultipleTypesMain = function (input) {
  // Complete the More Comfortable: Mad Libs Multiple Word Types exercise below with madLibsMultipleTypesMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsPopularMain = function (input) {
  // Complete the More Comfortable: Popular Mad Libs exercise below with madLibsPopularMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var madLibsSetsMain = function (input) {
  // Complete the More Comfortable: Sets of Mad Libs exercise below with madLibsSetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
