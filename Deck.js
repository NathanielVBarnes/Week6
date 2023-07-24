//This class will deine the deck of cards, and create a deck with 52 cards
class Deck {
    constructor() {
      this.cards = []; //initializes a deck of 52 cards 
      const ranks = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K', 'A'];
      const suits = ['♠', '♥', '♦', '♣'];
      for (let suit of suits) {
        for (let rank of ranks) {
          this.cards.push(new Card(rank, suit));
        }
      }
      this.shuffle();
    }
  
    shuffle() { //This method shuffles the deck randomly 
      for (let i = this.cards.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [this.cards[i], this.cards[j]] = [this.cards[j], this.cards[i]];
      }
    }

    dealCard() { //This method returns a single card from the deck 
        return this.cards.pop();
    }
}
