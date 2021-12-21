// test 1 

let occupations =[
    {
    name : "Librarian",
    Hint : "Works at a Library"
    },
    {
    name : "Newscaster",
    hint : "reads news"    
    },
    {
    name : 'Flight Attendant',
    hint : 'works on the air'
    },
    {
    name :"Reporter",
    hint : "Cover News"
    },
    {
    name: "Waiter",
    hint : 'Works at a restaurant'
    }
]
let animals = [
    {
        name : "Jiraffe",
        hint : "long neck"
    },
    {
        name : "Elephant",
        hint : "Heavy"
    },
    {
        name : "Cheetah",
        hint : "Always Laughing"
    },
    {
        name : "Bear",
        hint : "Don't run from them"
    },
    {
        name : "Shark",
        hint : "they live in the Ocean"
    }
]

let famousCharacters = [
    {
       name : 'Groot',
       hint : 'Bradley Cooper'
    },
    {
        name : 'Edna Mode',
        hint : 'The Incredibles'
    },
    {
        name: 'Optimus Prime',
        hint : "Tranformers"
    },
    {
        name : 'The Minions',
        hint : 'In their language Bu ta na ma ka means : To Infinity and Beyond'
    }
]
const categories = [occupations,animals,famousCharacters];
// console.log(occupations[0].name);

let final = getWord();
console.log(final.name);
console.log(final.hint);

const alphabet = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];




// test 2
// const ocupations = ['librarian','newscaster','Flight Attendant','Reporter','Waiter'];
// const animals =['Bear','Cheetah','Shark','Jiraffe', 'Elephant'];
// const famousCharacters = ['Groot','Edna Mode','Optimus Prime','The Minions']
// const categories = [ocupations,famousCharacters,animals];


function getRandom (max){
    return Math.floor(Math.random()* max);
}

function getWord () {
    const randomCat = getRandom(categories.length);
    const randomSub = getRandom(categories[randomCat].length);
    const guessWord = categories[randomCat][randomSub];
    // console.log(guessWord);
    return guessWord;
}






//  let ranLetter = getRandom(alphabet.length);
//  console.log(ranLetter);
function findLetter(){
    // const x = getWord();
    const x = 'anaconda'
    console.log(x);
    const letter = 'a'
    // const found = 'anaconda'.indexOf(letter)
    // console.log(found);
    for (let i=0;i<x.length;i++){
        console.log(x[i]);
        if (letter===x[i]){
            console.log(`position of letter ${letter} is ${i}`)
        }
    }
    
}
// findLetter();


