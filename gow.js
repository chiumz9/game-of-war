cardNum = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
suites = ["D", "C", "H", "S"];
//deck = []
//
//for (let i = 0; i < cardNum.length; i++){
//    for (let j = 0; j < suites.length; j++){
//        console.log('"'+cardNum[i] + suites[j] + '"');
//        deck.push(cardNum[i] + suites[j])
//    }
//    let j = 0;
//
//}
//console.log(deck)
//console.log(typeof deck)
placeHold = 0;
card1 = 0;
card2 = 0;
//DECK SETUP 52CARDS UNSUITED
fullDeck=[];
for(let  j=0;  j<4 ;j++){
    for (let i=0; i<cardNum.length; i++)
    fullDeck.push(cardNum[i]);
}

//CARD DRAWN W/ RANDOM
let drawnCard = function(card){
    return Math.floor(Math.random() * fullDeck.length);
}
//CARD REMOVAL FROM DECK FOR PLAYER ONE
let rmCardFrmDeck = function(rmCard){
    fullDeck.splice(rmCard, 1);
    console.log(fullDeck);
    return
}
//CARD REMOVAL FROM DECK FOR PLAYER TWO
let rmCardFrmDeck2=function(rmCard){
    fullDeck.splice(rmCard, 1);
    console.log(fullDeck);
    return
}

console.log(drawnCard());

function compareCards(){
    if(card1 === card2){


}
//BLANK SLATE
cardNum = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
suites = ["D", "C", "H", "S"];
//let playGame= function(){
//FullDeckSetUp & Use shuffle(arr)
//DivideDeck1 & Deck2
   //Deck1
   //Deck2
//Compare Card Drawn
   //.shift() then .push()
//WinCondition - deck.length=52

//DeckSetUp
const fullDeck=[];
for(let  j=0;  j<4 ;j++){
    for (let i=0; i<cardNum.length; i++)
        fullDeck.push(cardNum[i]);
}
//ShuffleDeck
fullDeck.sort(() => Math.random() - 0.5)
console.log(fullDeck)
//CreateDeck1 & 2
let makeDeck1 = function(arr){
    for (let i=0;i<=12;i++){
        
//end of playGame function
