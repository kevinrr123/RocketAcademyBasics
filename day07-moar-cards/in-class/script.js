// create a deck function
var makeDeck = function () {
  // Initialise an empty deck array
  var cardDeck = [];
  // Initialise an array of the 4 suits in our deck. We will loop over this array.
  var suits = ["hearts", "diamonds", "clubs", "spades"];

  // Loop over the suits array
  for (var i = 0; i < suits.length; i += 1) {
    // Store the current suit in a variable
    var currentSuit = suits[i];

    // Loop from 1 to 13 to create all cards for a given suit
    // Notice rankCounter starts at 1 and not 0, and ends at 13 and not 12.
    // This is an example of a loop without an array.
    for (var rankCounter = 1; rankCounter <= 13; rankCounter += 1) {
      // By default, the card name is the same as rankCounter
      var cardName = rankCounter;

      // If rank is 1, 11, 12, or 13, set cardName to the ace or face card's name
      if (cardName == 1) {
        cardName = "ace";
      } else if (cardName == 11) {
        cardName = "jack";
      } else if (cardName == 12) {
        cardName = "queen";
      } else if (cardName == 13) {
        cardName = "king";
      }

      // Create a new card with the current name, suit, and rank
      var card = {
        name: cardName,
        suit: currentSuit,
        rank: rankCounter
      };

      // Add the new card to the deck
      cardDeck.push(card);
    }
  }

  // Return the completed card deck
  return cardDeck;
};

// card shuffling function
// Get a random index ranging from 0 (inclusive) to max (exclusive).
var getRandomIndex = function (max) {
  return Math.floor(Math.random() * max);
};

// Shuffle the elements in the cardDeck array
var shuffleCards = function (cardDeck) {
  // Loop over the card deck array once
  var currentIndex = 0;
  while (currentIndex < cardDeck.length) {
    // Select a random index in the deck
    var randomIndex = getRandomIndex(cardDeck.length);
    // Select the card that corresponds to randomIndex
    var randomCard = cardDeck[randomIndex];
    // Select the card that corresponds to currentIndex
    var currentCard = cardDeck[currentIndex];
    // Swap positions of randomCard and currentCard in the deck
    cardDeck[currentIndex] = randomCard;
    cardDeck[randomIndex] = currentCard;
    // Increment currentIndex
    currentIndex = currentIndex + 1;
  }
  // Return the shuffled deck
  return cardDeck;
};

var moarCardsSingleCardMain = function (input) {
  // Complete the Base: Moar Cards Display Single Card exercise below with moarCardsSingleCardMain as the main function.
};

var moarCardsLowCardMain = function (input) {
  // Complete the Base: Moar Cards Low Card exercise below with moarCardsLowCardMain as the main function.
  var selectedCard = ``;
  var comCard = ``;
  //initialise the card deck
  var cardDeck = makeDeck();
  //shuffle the card deck
  var shuffledDeck = shuffleCards(cardDeck);
  //pop a card and output it to display
  selectedCard = shuffledDeck.pop();
  comCard = shuffledDeck.pop();
  var myOutputValue = `You have drewed ${selectedCard.name} of ${selectedCard.suit}. <br>AI have drewed ${comCard.name} of ${comCard.suit}. <br>  `;
  if (selectedCard.rank < comCard.rank) {
    myOutputValue += `You Win! <br> ${selectedCard.name} of ${selectedCard.suit} beats ${comCard.name} of ${comCard.suit}.`;
  } else if (selectedCard.rank == comCard.rank) {
    myOutputValue += "It's a tie!";
  } else {
    myOutputValue += `You Lose! <br> ${comCard.name} of ${comCard.suit} beats ${selectedCard.name} of ${selectedCard.suit}.`;
  }
  return myOutputValue;
};

var moarCardsLowCardQueenWinnerMain = function (input) {
  // Complete the Base: Moar Cards Low Card with Queen Winner exercise below with moarCardsLowCardQueenWinnerMain as the main function.
  var selectedCard = ``;
  var comCard = ``;
  //initialise the card deck
  var cardDeck = makeDeck();
  //shuffle the card deck
  var shuffledDeck = shuffleCards(cardDeck);
  //pop a card and output it to display
  selectedCard = shuffledDeck.pop();
  comCard = shuffledDeck.pop();
  var myOutputValue = `You have drewed ${selectedCard.name} of ${selectedCard.suit}. <br>AI have drewed ${comCard.name} of ${comCard.suit}. <br>  `;
  if (selectedCard.rank == 12) {
    return "You have drawn the Queen! You Win!";
  } else if (comCard.rank == 12) {
    return "AI have drawn the Queen! You Lose!";
  } else if (selectedCard.rank < comCard.rank) {
    myOutputValue += `You Win! <br> ${selectedCard.name} of ${selectedCard.suit} beats ${comCard.name} of ${comCard.suit}.`;
  } else if (selectedCard.rank == comCard.rank) {
    myOutputValue += "It's a tie!";
  } else {
    myOutputValue += `You Lose! <br> ${comCard.name} of ${comCard.suit} beats ${selectedCard.name} of ${selectedCard.suit}.`;
  }
  return myOutputValue;
};

var moarCardsLowCardHandsMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  var selectedCards = [];
  var autoWinGame = 0;
  var lowestCard = { rank: 13 };
  var comCard = ``;
  //initialise the card deck
  var cardDeck = makeDeck();
  //shuffle the card deck
  var shuffledDeck = shuffleCards(cardDeck);
  //pop a card and output it to display
  comCard = shuffledDeck.pop();
  var myOutputValue = `You Drew: <br>`;
  for (var i = 0; i < input; i++) {
    selectedCards[i] = shuffledDeck.pop();
    console.log(selectedCards);
    if (selectedCards[i].rank <= lowestCard.rank) {
      lowestCard = selectedCards[i];
    }
    if (selectedCards[i].rank == 12) {
      autoWinGame++;
    }
    myOutputValue += `${selectedCards[i].name} of ${selectedCards[i].suit} <br>`;
  }

  myOutputValue += `AI drew ${comCard.name} of ${comCard.suit} <br>`;

  if (autoWinGame >= 1) {
    myOutputValue += `You drewed a Queen. You auto win by default.`;
  } else if (comCard.rank == 12) {
    myOutputValue += `AI drewed a Queen. AI auto win by default.`;
  } else if (lowestCard.rank < comCard.rank) {
    myOutputValue += `You Win! <br> ${lowestCard.name} of ${lowestCard.suit} beats ${comCard.name} of ${comCard.suit}.`;
  } else if (lowestCard.rank == comCard.rank) {
    myOutputValue += "It's a tie!";
  } else {
    myOutputValue += `You Lose! <br> ${comCard.name} of ${comCard.suit} beats ${lowestCard.name} of ${lowestCard.suit}.`;
  }
  return myOutputValue;
};
var generateEmoji = function (input) {
  var currentCard = input;
  var myOutputValue = "";
  if (currentCard.suit == `hearts`) {
    return (myOutputValue = `❤`);
  }
  if (currentCard.suit == `diamonds`) {
    return (myOutputValue = `♦`);
  }
  if (currentCard.suit == `clubs`) {
    return (myOutputValue = `♣`);
  }
  if (currentCard.suit == `spades`) {
    return (myOutputValue = `♠`);
  }
};

var moarCardsLowCardSuitMain = function (input) {
  // Complete the Base: Moar Cards Low Card Hands exercise below with moarCardsLowCardHandsMain as the main function.
  var selectedCards = [];
  var autoWinGame = 0;
  var lowestCard = { rank: 13 };
  var comCard = ``;
  var emojiCreator = ``;
  var lowestCardEmoji = ``;
  //initialise the card deck
  var cardDeck = makeDeck();
  //shuffle the card deck
  var shuffledDeck = shuffleCards(cardDeck);
  //pop a card and output it to display
  comCard = shuffledDeck.pop();
  var myOutputValue = `You Drew: <br>`;
  for (var i = 0; i < input; i++) {
    selectedCards[i] = shuffledDeck.pop();
    console.log(selectedCards);
    if (selectedCards[i].rank <= lowestCard.rank) {
      lowestCard = selectedCards[i];
    }
    if (selectedCards[i].rank == 12) {
      autoWinGame++;
    }
    emojiCreator = generateEmoji(selectedCards[i]);
    myOutputValue += `${selectedCards[i].name} of ${emojiCreator} <br>`;
  }
  var comEmoji = generateEmoji(comCard);
  myOutputValue += `AI drew ${comCard.name} of ${comEmoji} <br>`;
  lowestCardEmoji = generateEmoji(lowestCard);

  if (autoWinGame >= 1) {
    myOutputValue += `You drewed a Queen. You auto win by default.`;
  } else if (comCard.rank == 12) {
    myOutputValue += `AI drewed a Queen. AI auto win by default.`;
  } else if (lowestCard.rank < comCard.rank) {
    myOutputValue += `You Win! <br> ${lowestCard.name} of ${lowestCardEmoji} beats ${comCard.name} of ${comEmoji}.`;
  } else if (lowestCard.rank == comCard.rank) {
    myOutputValue += "It's a tie!";
  } else {
    myOutputValue += `You Lose! <br> ${comCard.name} of ${comEmoji} beats ${lowestCard.name} of ${lowestCardEmoji}.`;
  }
  return myOutputValue;
}; // Complete the Base: Moar Cards Low Card Suit Output exercise below with moarCardsLowCardSuitMain as the main function.

var moarCardsLowCardWildCardMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Wild Card exercise below with moarCardsLowCardWildCardMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardWildPlayerMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Player-Chosen Wild Card exercise below with moarCardsLowCardWildPlayerMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCardBetsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card with Bets exercise below with moarCardsLowCardBetsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode exercise below with moarCardsLowCard2PMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var moarCardsLowCard2PairsMain = function (input) {
  // Complete the More Comfortable: Moar Cards Low Card 2-Player Mode with Pairs exercise below with moarCardsLowCard2PairsMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotSingleMain = function (input) {
  // Complete the Base: Chat Bot Single Chat Bot Answer Set below with chatBotSingleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotMultipleMain = function (input) {
  // Complete the Base: Chat Bot Multiple Chat Bot Answer Sets below with chatBotMultipleMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotUsernameMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Name below with chatBotUsernameMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotAgeMain = function (input) {
  // Complete the Base: Chat Bot Stores User's Age below with chatBotAgeMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotNamedMain = function (input) {
  // Complete the More Comfortable: Chat Bot Named Answer Sets below with chatBotNamedMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotDynamicMain = function (input) {
  // Complete the More Comfortable: Dynamic Chat Bot below with chatBotDynamicMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};

var chatBotFortuneMain = function (input) {
  // Complete the More Comfortable: Chat Bot Fortune Telling below with chatBotFortuneMain as the main function.
  var myOutputValue = "hello world";
  return myOutputValue;
};
