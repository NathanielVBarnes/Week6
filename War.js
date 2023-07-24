// the War class has properies deck, player1, and player2

class War {
    constructor() {
    this.deck = new Deck();
    this.player1 = new Player('Player 1'); 
    this.player2 = new Player('Player 2');
  }

  dealCards() { // this method distributes the cards to the two players
    this.deck.shuffle();

    while (this.deck.cards.length > 0) {
      this.player1.receiveCard(this.deck.dealCard());
      this.player2.receiveCard(this.deck.dealCard());
    }
  }

  playTurn() { // this method simulates a turn in the games
    const card1 = this.player1.playCard();
    const card2 = this.player2.playCard();

    console.log(`${this.player1.name} plays ${card1.rank} of ${card1.suit}`);
    console.log(`${this.player2.name} plays ${card2.rank} of ${card2.suit}`);

    const rankValue1 = card1.getRankValue(); //this method compares the ranks of the two played cards
    const rankValue2 = card2.getRankValue();

    if (rankValue1 > rankValue2) {
      this.player1.incrementScore();
      console.log(`${this.player1.name} wins the turn.`);
    } else if (rankValue1 < rankValue2) {
      this.player2.incrementScore();
      console.log(`${this.player2.name} wins the turn.`);
    } else {
      console.log('It\'s a tie!');
    }
  }

  playGame() { // this method starts the game and continues playing until one of the players runs out of cards
    this.dealCards();

    while (this.player1.hand.length > 0 && this.player2.hand.length > 0) {
      this.playTurn();
    }

    console.log(`\n----- GAME OVER -----\n`);
    console.log(`Final score:`);
    console.log(`${this.player1.name}: ${this.player1.score}`); 
    console.log(`${this.player2.name}: ${this.player2.score}`);
  }
}

// Create a new instance of the game and start playing
const warGame = new War();
warGame.playGame();