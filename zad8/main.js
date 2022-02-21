const possibilities = ["fight", "think about it"];

const addButton = document.querySelector(".add");
const cleanButton = document.querySelector(".clean");
const showAdviceButton = document.querySelector(".showAdvice");
const showOptionsButton = document.querySelector(".showOptions");

const addPossibilities = (e) => {
    e.preventDefault();
    possibilities.push(document.querySelector("input").value);
    console.log(possibilities);
}

const cleanPossibilities = (e) => {
    e.preventDefault();
    possibilities.length = 0;
}

const showAdviceFun = () => {
    let randomAdvice = Math.floor(Math.random() * possibilities.length);
    document.querySelector("h1").textContent = possibilities[randomAdvice];
}

const showPossibilities = () => {
    alert(possibilities);
}

addButton.addEventListener("click", addPossibilities);
cleanButton.addEventListener("click", cleanPossibilities);
showAdviceButton.addEventListener("click", showAdviceFun);
showOptionsButton.addEventListener("click", showPossibilities);