//The Player class has the properties name, score, and hand

class Player {
    constructor(name) { 
      this.name = name;
      this.score = 0;
      this.hand = []; // this array holds the player's cards
    }
  
    playCard() { // this method removes and returns the top card from a players hand
      return this.hand.pop();
    }
  
    receiveCard(card) { // this method adds a card to the players hand
      this.hand.unshift(card); 
    }
  
    incrementScore() { //this method increases the player's score by 1
      this.score++;
    }
  }
  