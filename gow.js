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
placeHold = 0

//DECK SETUP 52CARDS UNSUITED
fullDeck=[];
for(let  j=0;  j<4 ;j++){
    for (let i=0; i<cardNum.length; i++)
    fullDeck.push(cardNum[i]);
}

//CARD DRAWN W/ RANDOM
function drawnCard(){
    let card = Math.floor(Math.random() * fullDeck.length);
    console.log(card);
    return card
}
//CARD REMOVAL FROM DECK
function rmCardFrmDeck(rmCard){
    fullDeck.splice(rmCard, 1);
    console.log(fullDeck);
    return
}
//DECK1 for PLAYER 1
deck1=[]
for(let i=0; i < fullDeck/2;i++){
    rmCardFrmDeck()
}
rmCardFrmDeck(drawnCard());

let player1Score = 0;  
let player2Score = 0;

console.log(drawnCard());
