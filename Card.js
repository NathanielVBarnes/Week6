//defining the card class
class Card {
    constructor(rank, suit, value){ // represents a card with properties suit and rank to represent 
        this.rank = rank;
        this.suit = suit;
        this.value = value;
    }
    getRankValue() {  // this method returns the numerical value of the card's rank
        if (this.rank === 'A') return 14;  // Ace
        if (this.rank === 'K') return 13;  // King
        if (this.rank === 'Q') return 12;  // Queen
        if (this.rank === 'J') return 11;  // Jack
        return parseInt(this.rank);       // Numbered cards
    }
}
