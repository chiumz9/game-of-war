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
        let suits = ['H','S','C','D']
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

//suffle deck
fullDeck.shuffle()

//buildDeck1

let deck1 = []
let buildDeck1 = ()=>{
    for(let i=0;i<26;i++){
        deck1.push(fullDeck.cards[i])
    }
}
buildDeck1()

//buildDeck2

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

const p1 = new Player('player 1', deck1)
const p2 = new Player('player 2',deck2)


//gameOn
let rndNum = 0
let winner = false
let playRnd=()=>{
    if(p1.deck.length === 0 || p2.deck.length === 0){
        winner = true
    }
    let tieHold = []
    //RND WIN COND.
    if(p1.deck[0].value > p2.deck[0].value){
        p1.deck.push(p1.deck[0],p2.deck[0])
        p1.deck.shift()
        p2.deck.shift()
        console.log('player 1 takes',p1.deck[0],p2.deck[0],'rndNum: ', rndNum +=1 )
    }else if (p1.deck[0].value < p2.deck[0].value){
        p2.deck.push(p1.deck[0],p2.deck[0])
        p1.deck.shift()
        p2.deck.shift()
        console.log('player 2 takes',p1.deck[0],p2.deck[0],'rndNum: ', rndNum+=1)
        //RND TIE COND.
    }else if (p1.deck[0].value === p2.deck[0].value){
        while(p1.deck[0].value===p2.deck[0].value){
            console.log('else if',p1.deck, p2.deck)
            tieHold.push(...p1.deck.splice(0,4),...p2.deck.splice(0,4))
            console.log('tie happened,sent to tieHold',tieHold,'rndNum: ', rndNum)
            if(p1.deck.length <= 4 || p2.deck.length <= 4){
                winner = true
                if(p1.deck.length<4){
                    return console.log('Player 2 wins! & Player 1 loses')
                }else if(p2.deck.length<4){
                    return console.log('Player 1 wins! & Player 2 loses!')
                }
            }
            //TIE TAKES ALL
            if(p1.deck[0].value > p2.deck[0].value){
                p1.deck.push(...tieHold)
                tieHold = []
                console.log('p1 takes all',p1.deck[0],p2.deck[0],tieHold,'rndNum: ', rndNum+=1)
                playRnd()
            }else if(p1.deck[0].value < p2.deck[0].value){
                p2.deck.push(...tieHold)
                tieHold = []
                console.log('p2 takes all',p1.deck[0],p2.deck[0],tieHold,'rndNum: ', rndNum+=1)
                playRnd()
            }
        }
    }
}
let maxGames = 0
//gameOn
let gameOn = () =>{
    while(winner===false){
        maxGames += 1
        playRnd()
        if(maxGames === 1000){
            console.log('to be continued...')
            winner = true
        }
    }
    console.log('numbers of games: ' + maxGames)
    if(p2.deck.length === 0){
        winner = true
        console.log('player 2 loses! player 1 wins!!')
    }else if(p1.deck.length === 0){
        winner =true
        console.log('player 1 loses! player 2 wins!!')
    }
}
gameOn()
