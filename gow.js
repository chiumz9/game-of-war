/*cardNum = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
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
let rmCardFrmDeck = function(drawnCard){
    fullDeck.splice(drawnCard, 1);
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
*/
//BLANK SLATE

//let playGame= function(){
//FullDeckSetUp & Use shuffle(arr)
//DivideDeck1 & Deck2
   //Deck1
   //Deck2
//Compare Card Drawn
   //.shift() then .push()
//WinCondition - deck.length=52

cardNum = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
suites = ["D", "C", "H", "S"];

//DeckSetUp 
let deck1 = [] //Player1's Deck
let deck2= [] //Player2's Deck
const fullDeck=[];
for(let  j=0;  j<4 ;j++){
    for (let i=0; i<cardNum.length; i++){
        fullDeck.push(cardNum[i]);
    }
}
console.log('fullDeck is built : ')
console.log(fullDeck)
//ShuffleDeck
fullDeck.sort(() => Math.random() - 0.5)//Shuffle Deck
console.log("fullDeck is shuffled: ")
console.log(fullDeck)
//CreateDeck1 & 2
let makeDeck1 = function(fulldeck){
    for (let i=0;i<26;i++){
        deck1.push(fulldeck[i]);
    }
}
makeDeck1(fullDeck);
console.log('deck1 is built: ')
console.log(deck1)
let makeDeck2 =function(fulldeck){
    for(let i=26;i<52;i++){
        deck2.push(fulldeck[i])
    }
}
makeDeck2(fullDeck);
console.log('deck2 is built: ')
console.log(deck2)
//Compare first card, add to end, remove first
let compare=function(deck1,deck2){ 
    if(deck1[0] === deck2[0]){
        for(let i=0;deck1[i]===deck2[i];i+=3 ){
            if(deck1[i] > deck2[i]){//Deck1 Card wins
                deck1.push[deck1.slice(0,i+1)];
                deck1.push[deck2.slice(0,i+1)];
                deck1.splice(0,i-1);
                deck2.splice(0,i-1);
            }else if (deck1[i] < deck2[i]){//Deck2 card wins
                deck2.push[deck2.splice(0, i+1)];
                deck2.push[deck1.splice(0,i+1)];
                deck1.splice(0,i-1);
                deck2.splice(0,i-1);
            }else{
                return 'tie went wrong, else returned'
            }
        }
    }else if(deck1[0] > deck2[0]){//Deck1 Card wins
        deck1.push[deck1[0]];
        deck1.push[deck2[0]];
        deck1.shift();
        deck2.shift();
    }else if (deck1[0] < deck2[0]){//Deck2 card wins
        deck2.push[deck2[0]];
        deck2.push[deck1[0]];
        deck1.shift(;)
        deck2.shift();
    }else {
        return 'compare func went wrong'
    }
}
if(deck1 || deck2 !== 0){
    for(i )   

}else if(deck1 ===0){
    return "Player Two Wins!!"

}else if (deck2 === 0){
    return "Player One Wins!!"
}else{
    return "Something wrong. No one wins"
}
    
