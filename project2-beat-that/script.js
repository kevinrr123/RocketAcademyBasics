var game_state_rolls = `game_state_rolls`;
var game_state_chooseDice = `game_state_chooseDice`;
var game_state_comparescores = `game_state_comparescores`;
var gameState = game_state_rolls;

var currentplayerRolls = [];
var currentPlayer = 1;
var allPlayerScore = [];
var myOutputValue = 0;

var rollDice = function () {
  var randomDecimal = Math.random() * 6;
  var randomInteger = Math.floor(randomDecimal);
  var diceNumber = randomInteger + 1;
  return diceNumber;
};

var rollDiceforplayer = function () {
  var counter = 0;
  while (counter < 2) {
    currentplayerRolls.push(rollDice());
    counter = counter + 1;
  }
  return `Hi Player ${currentPlayer}. You rolled ${currentplayerRolls[0]} for dice one and ${currentplayerRolls[1]} for dice two. Choose the order of the dice by entering 1 or 2.`;
};
var getPlayerScore = function (playerInput) {
  var playerScore;
  if (playerInput == 1) {
    var playerScore = "" + currentplayerRolls[0] + currentplayerRolls[1];
    myOutputValue = `, you chose Dice 1 first. Your number is ${playerScore}`;
  }
  if (playerInput == 2) {
    var playerScore = "" + currentplayerRolls[1] + currentplayerRolls[2];
    myOutputValue = `, you chose Dice 2 first. Your number is ${playerScore}`;
  }
  allPlayerScore.push(playerScore);
  currentplayerRolls = [];
  return "Player " + currentPlayer + myOutputValue;
};

var comparePlayerScores = function () {
  var compareMessage =
    `player 1 is ` +
    allPlayerScore[0] +
    ` and player 2 is ` +
    allPlayerScore[1];
  if (allPlayerScore[0] > allPlayerScore[1]) {
    compareMessage = compareMessage + ` so player 1 wins!`;
  }
  if (allPlayerScore[1] > allPlayerScore[0]) {
    compareMessage = compareMessage + ` so player 2 wins!`;
  }
  if (allPlayerScore[1] == allPlayerScore[0]) {
    compareMessage = compareMessage + ` is a draw.`;
  }
  return compareMessage;
};

var resetGame = function () {
  currentPlayer = 1;
  gameState = game_state_rolls;
  allPlayerScore = [];
};

var main = function (input) {
  var outputMessage = "";
  if (gameState == game_state_rolls) {
    outputMessage = rollDiceforplayer();
    gameState = game_state_chooseDice;
    return outputMessage;
  }
  if (gameState == game_state_chooseDice) {
    outputMessage = getPlayerScore(input);
    if (currentPlayer == 1) {
      currentPlayer = 2;
      gameState = game_state_rolls;
      return outputMessage + ` and now it is player 2 turn.`;
    }
    if (currentPlayer == 2) {
      gameState = game_state_comparescores;
      return outputMessage + `, press submit to calculate scores!`;
    }
    return outputMessage;
  }

  if (gameState == game_state_comparescores) {
    outputMessage = comparePlayerScores();
    resetGame();
    return outputMessage;
  }
};
