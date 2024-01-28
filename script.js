const cardArray=[
    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },

    {
        name:'fries',
        img:'images/fries.png'
    },
    {
        name:'cheeseburger',
        img:'images/cheeseburger.png'
    },
    {
        name:'ice-cream',
        img:'images/ice-cream.png'
    },
    {
        name:'milkshake',
        img:'images/milkshake.png'
    },
    {
        name:'pizza',
        img:'images/pizza.png'
    },
    {
        name:'hotdog',
        img:'images/hotdog.png'
    },
]

cardArray.sort(()=>0.5-Math.random()) // way to sort randomly
//console.log(cardArray)

const gridDisplay=document.querySelector('#grid')
const resultDisplay=document.querySelector('#result')

let cardsChosen=[] //empty array
// let as further size is changed
let cardsChosenIds=[]
const cardsWon=[]

function createBoard(){
    for(let i=0;i<cardArray.length;i++){
       const card=document.createElement('img') //see
       card.setAttribute('src','images/blank.png') // setting src as blank.png
       card.setAttribute('border','3px solid black')
       
       card.setAttribute('data-id',i)
       card.addEventListener('click',flipCard) // call back function
       gridDisplay.appendChild(card)
       //console.log(card)
    }
}

createBoard()

function checkMatch(){
    console.log('check for a match!')
   const cards=document.querySelectorAll('img')
const optionOneId=cardsChosenIds[0]
const optionTwoId=cardsChosenIds[1]

    console.log(cards)
    if(optionTwoId==optionOneId){
        alert('You clicked the same image!')
        cards[optionOneId].setAttribute('src','images/blank.png')
    }
   else if(cardsChosen[0]==cardsChosen[1]){
        alert('You found a match!')
        cards[optionOneId].setAttribute('src','images/white.png')
        cards[optionTwoId].setAttribute('src','images/white.png')

        cards[optionOneId].removeEventListener('click',flipCard) //removing the flipcard event that added
        cards[optionTwoId].removeEventListener('click',flipCard)

        cardsWon.push(cardsChosen)
    }
    else{
        cards[optionOneId].setAttribute('src','images/blank.png')
        cards[optionTwoId].setAttribute('src','images/blank.png')
        alert('Sorry try again!')
    }

    resultDisplay.innerText=cardsWon.length
    cardsChosen=[]
    cardsChosenIds=[]

    if(cardsWon.length==cardArray.length/2){
        resultDisplay.innerText='Congratulations you found them all!'
    }
}

function flipCard(){
    // getting it's data id
    const cardId=this.getAttribute('data-id') //In an event, this refers to the element that received the event.
    cardsChosen.push(cardArray[cardId].name)
    cardsChosenIds.push(cardId)
    console.log(cardsChosen)
    console.log(cardsChosenIds)
    console.log("clicked",cardId)
    this.setAttribute('src',cardArray[cardId].img)
    if(cardsChosen.length==2){
        setTimeout(checkMatch,500)
    }
}