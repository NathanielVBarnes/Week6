const expect = chai.expect;

describe ("Create a Card", function() {
    it ('Should Create an object with 3 Parameters', function (){
        console.log('card');
        let suit = '♥'
        let name = 'A'
        let value = 14;
        let card = new Card(suit, name, value)
        console.log(card);
        console.log({ suit: suit, name: name, value: value});
        expect(card).to.deep.equal({suit: suit, name: name, value: value });
     });
})

 