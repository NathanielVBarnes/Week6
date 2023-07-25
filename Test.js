const expect = chai.expect;

describe ("Create a Card", function() {
    it ('Should Create an object with 3 Parameters', function (){
        console.log('card');
        let rank = '♦';
        let suit = 'Ace';
        let value = 14;
        let card = new Card(rank, suit, value)
        console.log(card);
        console.log({ rank: rank, suit: suit, value: value});
        expect(card.rank).to.equal('♦');
        expect(card.suit).to.equal('Ace');
        expect(card.value).to.equal(14);
     });
});

