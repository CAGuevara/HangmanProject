// test 1 
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
const showClue = document.querySelector("#clue");
const alphaContainer = document.querySelector("#alphaContainer");
const playAgain = document.querySelector("#playAgain");
const category = document.querySelector("#categories");
const wordInit = document.querySelector("#wordInit");
let getWordArray = [];

// ================ Printing the Alphabet ================

alphabet.forEach(letter => {
    let alpha = document.createElement("div");
    alpha.setAttribute("class","letter");
    alpha.innerText=letter.toUpperCase();
    alphaContainer.appendChild(alpha);
})

let occupations =[
    {
        name : "Librarian",
        hint : "Works at a Library",
        cat : "Occupations"
    },
    {
        name : "Newscaster",
        hint : "reads news",
        cat : "Occupations"    
    },
    {
        name : 'Flight Attendant',
        hint : 'works on the air',
        cat : "Occupations"
    },
    {
        name :"Reporter",
        hint : "Cover News",
        cat : "Occupations"
    },
    {
        name: "Waiter",
        hint : 'Works at a restaurant',
        cat : "Occupations"
    }
]
let animals = [
    {
        name : "Jiraffe",
        hint : "long neck",
        cat : "Animals"
    },
    {
        name : "Elephant",
        hint : "Heavy",
        cat : "Animals"
    },
    {
        name : "Cheetah",
        hint : "Always Laughing",
        cat : "Animals"
    },
    {
        name : "Bear",
        hint : "Don't run from them",
        cat : "Animals"
    },
    {
        name : "Shark",
        hint : "they live in the Ocean",
        cat : "Animals"
    }
]

let famousCharacters = [
    {
        name : 'Groot',
        hint : 'Bradley Cooper',
        cat : "famous Characters"
    },
    {
        name : 'Edna Mode',
        hint : 'The Incredibles',
        cat : "famous Characters"
    },
    {
        name: 'Optimus Prime',
        hint : "Tranformers",
        cat : "famous Characters"
    },
    {
        name : 'The Minions',
        hint : 'In their language Bu ta na ma ka means : To Infinity and Beyond',
        cat : "famous Characters"
    }
]


const categories = [occupations,animals,famousCharacters];

// ============== GET RANDOM WORD TO PLAY ==============
function getRandom (max){
    return Math.floor(Math.random()* max);
}

function getWord () {
    const randomCat = getRandom(categories.length);
    const randomSub = getRandom(categories[randomCat].length);
    const guessWord = categories[randomCat][randomSub];
    return guessWord;
}

// ==============  ==============
let final = getWord();
let wordToGuess = getWord(); 
category.textContent = wordToGuess.cat;
let displayWord = wordToGuess.name;
getWordArray = displayWord.split("")
showingWord(getWordArray);

// ============== SHOWING THE WORDS SPACES ==============
function showingWord(getWordArray){
    getWordArray.forEach(letterDisplay => {
        let wordVis = document.createElement("div");
        wordVis.setAttribute("class","wordDisplay");
        wordVis.innerText=letterDisplay.toUpperCase();
        wordInit.appendChild(wordVis);
    })
}
// ============== CLEAN ARRAY ==============
function cleanUpWordArray(){
    getWordArray = [];
}

// ============== HINT ==============
hint.onclick = function(){
    showClue.innerText=`Hint : ${wordToGuess.hint}`;  
    hint.style.visibility ="hidden"; 
};

// ============== PLAY AGAIN ==============
playAgain.onclick = function(){
    wordToGuess = getWord();
    showClue.innerText = " ";
    hint.style.visibility ="visible";
    category.textContent = wordToGuess.cat;
    // console.log(showingWord(getWordArray));
    // if(getWordArray.length){
    //     cleanUpWordArray(); 
    // }
    // else{
    //     showingWord(getWordArray);
    // }
};