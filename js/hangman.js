// test 1 
const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
// let showClue = document.getElementById("clue");
const showClue = document.querySelector("#clue");
const alphaContainer = document.querySelector("#alphaContainer");
const playAgain = document.querySelector("#playAgain");
const category = document.querySelector("#categories");

alphabet.forEach(letter => {

})


let occupations =[
    {
    name : "Librarian",
    Hint : "Works at a Library",
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
// console.log(occupations[1]);

let final = getWord();
category.textContent = final.cat;
console.log(final.name);
console.log(final.hint);
console.log(final.cat);

hint.onclick = function(){
    showClue.innerHTML=`${final.hint}`;  
    hint.style.visibility ="hidden"; 
};



playAgain.onclick = function(){
    // console.log(getWord());
    final = getWord();
    showClue.innerHTML = " ";
    // console.log(final)
    hint.style.visibility ="visible";
    category.textContent = final.cat;
  
}

function getRandom (max){
    return Math.floor(Math.random()* max);
}

function getWord () {
    const randomCat = getRandom(categories.length);
    console.log(randomCat);
    const randomSub = getRandom(categories[randomCat].length);
    const guessWord = categories[randomCat][randomSub];
    return guessWord;
}




