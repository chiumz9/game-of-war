class Player{
    constructor(name, deck){
        this.name = name
        this.deck = deck
    }
}
class Card{
    constructor(suit, card,score){
        this.suit = suit
        this.card = card
        this.score = score
    }
}
class Deck{
    constructor(){
        let nums = ['1','2','3','4']
        let suits = ['X', 'Y', 'Z']
        this.card = []
        for(let i=0;i<suits.length;i++){
            for(let j=0;j<nums.length;j++){
                this.card.push(new Card(suits[i],nums[j],j))
            }
        }
    }shuffle = ()=>{
        this.card.sort(() => Math.random() - 0.5)//Shuffle Deck
    }

}
//mini deck
const fullDck = new Deck()
let deck1 = []
let deck2 = []
fullDck.shuffle()
for(let i=0;i<6;i++){
    deck1.push(fullDck.card[i])
}
for(let i=6;i<12;i++){
    deck2.push(fullDck.card[i])
}
let playOn=()=>{
    let tieHold = []
    if (deck1.length===0){
        winner=true
        console.log('player 1 loses')
        return gameOn()
    }else if (deck2.length === 0){
        winner=true
        console.log('player 2 loses')
        return gameOn()
    }
    if(deck1[0].score===deck2[0].score){
        for(let i=0;deck1[i].score===deck2[i].score;i+=2){
            tieHold.push(deck1.splice(0,i+1))
            tieHold.push(deck1.splice(0,i+1))
            console.log('tie happened')
            if(deck1.length==0||deck2==0){
                break
            }else if (deck1[i].score>deck2[i].score){
                deck1.push(...tieHold)
            }else if (deck1[i].score > deck2[i].score){
                deck2.push(...tieHold)
            }
        }
    }
    if(deck1[0].score > deck2[0].score){
        deck1.push(...deck1.splice(0,1))
        deck1.push(...deck2.splice(0,1))
        console.log('player 1 takes Rnd',deck1[0],deck2[0])
    }else if(deck1[0].score < deck2[0].score){
        deck2.push(...deck1.splice(0,1))
        deck2.push(...deck2.splice(0,1))
        console.log('player 2 takes Rnd',deck2[0],deck1[0])
    }
}
let gameOn=()=>{
    let winner = false
    if(deck1.length !== 0 && deck2.length !==0){
        console.log('playOn again')
        while(winner===false){
            playOn()
        }
    }
}
gameOn()
