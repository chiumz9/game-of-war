class Card{
   constructor(card,suit,value){
      this.card = card
      this.suit = suit
      this.value = value
   }
}
class Deck{
   constructor(){
      let cardNums = ['2','3','4','6','6','7','8','9','10','J','Q','K','A']
      let suits = ['Diamond','Club','Heart','Spade']
      this.cards = []
      for(let i=0;i<suits.length;i++){
         for(let j =0;j<cardNums.length;j++){
            this.cards.push(new Card(cardNums[j],suits[i],j))
         }
      }
      this.shuffle = ()=>{
         this.cards.sort(() => Math.random() - 0.5)//Shuffle Deck
      }
      this.length = this.cards.length
   }
}
const fullDeck = new Deck()
//shuffle deck && divide deck
fullDeck.shuffle()
let deck1 = []//First deck build
let buildDeck1 = ()=>{
   for(let i=0;i<26;i++){
      deck1.push(fullDeck.cards[i])
   }
}
buildDeck1()
let deck2 = []
let buildDeck2 = ()=>{
   for(let i=26;i<52;i++){
      deck2.push(fullDeck.cards[i])
   }
}
buildDeck2()
//Player Class
class Player{
   constructor(name, deck){
      this.name = name
      this.deck = deck 
   }
}
//Player1 & Player2 creation
let p1 = new Player('player 1', deck1) // PLAYER ONE
let p2 = new Player('player 2',deck2) // PLAYER TWO
//GAME LOGIC STARTS HERE
let numRnds = 0
let tieHold = []
let winner = false 
while ( winner === false ){
   numRnds ++
   playRnd()
   winCon()
   console.log(numRnds)
}
function playRnd(){
   if ( p1.deck[0].value > p2.deck[0].value ){
      p1.deck.push( p1.deck.shift() , p2.deck.shift() )
   }else if ( p2.deck[0].value > p1.deck[0].value ){
      p2.deck.push( p2.deck.shift() , p1.deck.shift() )
   }else if ( p1.deck[0].value === p2.deck[0].value){
      warDeclared()
   }
}
function winCon(){
   if ( p1.deck.length === 0 ){
      console.log('Player 2 wins!')
      winner = true
   }else if ( p2.deck.length === 0 ){
      console.log('Player 1 wins!')
      winner = true
   }
}
function warDeclared(){
   if ( p1.deck.length < 4 ){
      console.log('Player 1 out of cards!')
      winner = true
      return
   }else if ( p2.deck.length < 4 ){
      console.log( 'Player 2 out of cards!' )
      winner = true
      return
   }else {
      tieHold.push( p1.deck.shift() , p2.deck.shift() )
      tieHold.push( p1.deck.shift() , p2.deck.shift() )
      tieHold.push( p1.deck.shift() , p2.deck.shift() )
   }
   if ( p1.deck[0].value > p2.deck[0].value ){
      p1.deck.push( ...tieHold )
      tieHold = []
      console.log('Pl takes tie')
      return
   }else if ( p1.deck[0].value < p2.deck[0].value ){
      p2.deck.push( ...tieHold )
      tieHold = []
      console.log('P2 takes tie')
      return
   }
}
