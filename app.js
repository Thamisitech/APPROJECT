//CREATE A DECK OF CARDS

//CLASS IS NEEDED FOR ALL OF THE CARDS
//CLASS IS NEEDED FOR THE DECK OF 52

class Card {
  constructor(suit, value) {
    //Constructor essentially creates the model of what a card has SUIT and VALUE
    this.suit = suit; //CONNECTING TO VARIABLE ABOVE
    this.value = value;
  }
}


//TEST IF IT LETS ME MAKE A CARD
// let card = new Card('Spades', 8);
// console.log(card);

// MAKE A DECK OF 52 CARDS

class Deck {
  constructor() {
    this.deck = []; // Making this CLASS "DECK" EQUAL TO AN ARRAY OF POTENTIAL CARD OBJECT COMBINATIONS
  }
  createDeck(suits, values) {
    for (let suit of suits) {
      for (let value of values) {
        this.deck.push(new Card(suit, value));
      }
    }

    return this.deck;
  }
}

const suits = ["Hearts", "Diamonds", "Clubs", "Spades"];
const values = ["Two", "Three", "Four", "Five", "Six", "Seven", "Eight", "Nine", "Ten", "Jack", "Queen", "King", "Ace"];
let deck = new Deck();
deck.createDeck(suits, values);
// console.log(deck);

//START THE GAME  

function gamestart(){
  let  playerhand;
  let  househand;
}
gamestart();


//RANDOM CARD

function pickCard(array, deck) {
  array.push(deck[Math.round(Math.random() * 52)]);
}

function dealplayer(deck) {
  let playerhand = [];
  pickCard(playerhand, deck.deck);
  pickCard(playerhand, deck.deck);
  return playerhand;
}
function addcardplayer(deck) {
  let playerhand = [];
  pickCard(playerhand, deck.deck);
  //console.log(playerhand)
  return playerhand[0];
}

function dealhouse(deck) {
  let househand = [];
  pickCard(househand, deck.deck);
  pickCard(househand, deck.deck);
  return househand;
}



 // THIS ONLY NEEDS TO RUN WHEN END/STAY IS PRESSED //SCORE FINDER
function getHandValue(curHand){
  curHand.forEach(el => {
    let val;
    switch(el.value){
      case 'Ace':
        val = 1;
        break;
      case 'Two':
        val = 2;
        break;
      case 'Three':
        val = 3;
        break;
      case 'Four':
        val = 4;
        break;
      case 'Five':
        val = 5;
        break;
      case 'Six':
        val = 6;
        break;
      case 'Seven':
        val = 7;
        break;
      case 'Eight':
        val = 8;
        break;
      case 'Nine':
        val = 9;
        break;
      default:
        val = 10;       
    }
    el.value = val;
  });
  return curHand;
}


let playersum = 0;
let housesum = 0;

function scoresum(){
  playerhand.forEach(x => {
    playersum = playersum + x.value
  })

  househand.forEach(x => {
    housesum = housesum + x.value
  })

  console.log(playersum, housesum)
}



//MAIN IF ELSE STATEMENT 

function whowins(){
  if (housesum == playersum){
    console.log("TIE!")
  }
  else if (playersum > housesum && playersum<=21){
    console.log("Player Wins!");
  } else{
    console.log("House Wins =C");
}
}
//BUTTONS

document.querySelector('#runstartfunc').addEventListener('click', () => {
  playerhand = [...dealplayer(deck)]
  househand = [...dealhouse(deck)]
  console.log(playerhand, househand)
    // getHandValue(playerhand);
})

document.querySelector('#heroin').addEventListener('click', () => {
  playerhand.push(addcardplayer(deck))
  console.log(playerhand)
})

document.querySelector('#praisethelord').addEventListener('click', () => {
  playerhand = getHandValue(playerhand);
  househand = getHandValue(househand);
  scoresum();
  whowins();  
})




//console.log(getHandValue(playerhand))

// FUN QUOTE STUFF 

var quotes = ["Checking Its The Cool Thing to do! - Max (Poker Night At The Inventory)", "So Long Space Cowboy - Spike (Cowboy BeBop)", "Who Left this Here ? - Thami H. (Creator)", "Don't Make a joke about 'busting' its too easy - Mr. Whalen (Teacher)", "Hit Me Baby One More Time - Britney Spears (...Baby One More Time)", "Suicide is Badass! - Danny Devito (It's Always Sunny in Philadelphia)"];

function newQuote() {
  var randomNumber = Math.floor(Math.random() * (quotes.length));
  document.getElementById('quoteDisplay').innerHTML = quotes[randomNumber];
}
