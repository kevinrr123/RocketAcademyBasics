var GAME_START = "game start";
var GAME_CARDS_DRAWN = "cards are drawn";
var GAME_HIT_OR_STAND = "hit or stand";
var currentGameMode = GAME_START;

var playerHand = [];
var dealerHand = [];

var gameDeck = [];
var suit = ["diamonds", "spades", "hearts", "clubs"];
var value = [
  "Ace",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "Jack",
  "Queen",
  "King"
];

var formDeck = function () {
  var deck = [];
  for (var i = 0; i < suit.length; i++) {
    for (var j = 0; j < value.length; j++) {
      if (value[j] == "Ace") {
        var cardValue = 1;
      } else if (
        value[j] == "Jack" ||
        value[j] == "Queen" ||
        value[j] == "King"
      ) {
        var cardValue = 10;
      } else {
        cardValue = parseInt(value[j]);
      }
      var card = { Value: value[j], Suit: suit[i], CardValue: cardValue };
      deck.push(card);
    }
  }
  return deck;
};

var shuffleDeck = function (cards) {
  for (let i = 0; i < cards.length; i++) {
    let j = Math.floor(Math.random() * cards.length);
    let temp = cards[i];
    cards[i] = cards[j];
    cards[j] = temp;
  }
  return cards;
};

var createNewDeck = function () {
  var newDeck = formDeck();
  var shuffledDeck = shuffleDeck(newDeck);
  return shuffledDeck;
};

var checkForBlackJack = function (handArray) {
  var playerCardOne = handArray[0];
  var playerCardTwo = handArray[1];
  var isBlackJack = false;

  if (
    (playerCardOne.value == "Ace" && playerCardTwo.cardValue >= 10) ||
    (playerCardTwo.value == "Ace" && playerCardOne.cardValue >= 10)
  ) {
    isBlackJack = true;
  }

  return isBlackJack;
};

var calculateTotalHandValue = function (handArray) {
  var totalHandValue = 0;
  var aceCounter = 0;
  var index = 0;
  while (index < handArray.length) {
    var currCard = handArray[index];

    if (
      currCard.Value == "King" ||
      currCard.Value == "Queen" ||
      currCard.Value == "Jack"
    ) {
      totalHandValue = totalHandValue + 10;
    } else if (currCard.Value == "Ace") {
      totalHandValue = totalHandValue + 11;
      aceCounter = aceCounter + 1;
    } else {
      totalHandValue = totalHandValue + currCard.CardValue;
    }
    index = index + 1;
  }
  index = 0;

  while (index < aceCounter) {
    if (totalHandValue > 21) {
      totalHandValue = totalHandValue - 10;
    }
    index = index + 1;
  }
  return totalHandValue;
};

var displayPlayerAndDealerHands = function (playerHandArray, dealerHandArray) {
  var playerMessage = "Player hand:<br>";
  var index = 0;
  while (index < playerHandArray.length) {
    playerMessage =
      playerMessage +
      playerHandArray[index].Value +
      " of " +
      playerHandArray[index].Suit +
      "<br>";
    index = index + 1;
  }

  index = 0;
  var dealerMessage = "Dealer hand:<br>";
  while (index < dealerHandArray.length) {
    dealerMessage =
      dealerMessage +
      dealerHandArray[index].Value +
      " of " +
      dealerHandArray[index].Suit +
      "<br>";
    index = index + 1;
  }
  return playerMessage + "<br>" + dealerMessage;
};

var displayHandTotalValues = function (playerHandValue, dealerHandValue) {
  var totalHandValueMessage =
    "<br>Player total hand value: " +
    playerHandValue +
    "<br>Dealer total hand value: " +
    dealerHandValue;
  return totalHandValueMessage;
};

var main = function (input) {
  var outputMessage = "";

  if (currentGameMode == GAME_START) {
    gameDeck = createNewDeck();
    playerHand.push(gameDeck.pop());
    playerHand.push(gameDeck.pop());
    dealerHand.push(gameDeck.pop());
    dealerHand.push(gameDeck.pop());
    currentGameMode = GAME_CARDS_DRAWN;
    outputMessage =
      "Player and dealer have been dealt cards. Click Submit to continue.";
    return outputMessage;
  }

  if (currentGameMode == GAME_CARDS_DRAWN) {
    var playerHasBlackJack = checkForBlackJack(playerHand);
    var dealerHasBlackJack = checkForBlackJack(dealerHand);

    if (playerHasBlackJack == true || dealerHasBlackJack == true) {
      if (playerHasBlackJack == true && dealerHasBlackJack == true) {
        outputMessage =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          "<br>Its a Black Jack Tie!";
      } else if (playerHasBlackJack == true && dealerHasBlackJack == false) {
        outputMessage =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          "<br>Player wins by Black Jack!";
      } else {
        outputMessage =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          "<br>Dealer wins by Black Jack!";
      }
    } else {
      outputMessage =
        displayPlayerAndDealerHands(playerHand, dealerHand) +
        '<br> There are no Black Jacks. <br>Please input "hit" or "stand".';
      currentGameMode = GAME_HIT_OR_STAND;
    }
    return outputMessage;
  }

  if (currentGameMode == GAME_HIT_OR_STAND) {
    if (input == "hit") {
      playerHand.push(gameDeck.pop());
      outputMessage =
        displayPlayerAndDealerHands(playerHand, dealerHand) +
        '<br> You drew another card. <br>Please input "hit" or "stand".';
    } else if (input == "stand") {
      var playerHandTotalValue = calculateTotalHandValue(playerHand);
      var dealerHandTotalValue = calculateTotalHandValue(dealerHand);

      while (dealerHandTotalValue < 17) {
        dealerHand.push(gameDeck.pop());
        dealerHandTotalValue = calculateTotalHandValue(dealerHand);
      }

      if (
        playerHandTotalValue == dealerHandTotalValue ||
        (playerHandTotalValue > 21 && dealerHandTotalValue > 21)
      ) {
        outputMessage =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          "<br>Its a Tie!" +
          displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
      } else if (
        (playerHandTotalValue > dealerHandTotalValue &&
          playerHandTotalValue <= 21) ||
        (playerHandTotalValue <= 21 && dealerHandTotalValue > 21)
      ) {
        outputMessage =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          "<br>Player wins!" +
          displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
      } else {
        outputMessage =
          displayPlayerAndDealerHands(playerHand, dealerHand) +
          "<br>Dealer wins!" +
          displayHandTotalValues(playerHandTotalValue, dealerHandTotalValue);
      }

      currentGameMode = GAME_START;
      playerHand = [];
      dealerHand = [];
    } else {
      outputMessage =
        'wrong input. Only type "hit" or "stand".<br>' +
        displayPlayerAndDealerHands(playerHand, dealerHand);
    }

    return outputMessage;
  }
};
