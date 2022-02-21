const inputBox = document.querySelector("input");
const passwords = ["oNe", "TwO"];
const messages = ["good", "great"];

const showMessage = (e) => {
    let passwordToCheck = e.target.value.toLowerCase();
    for (let i = 0; i < passwords.length; i++){
        if (passwords[i].toLowerCase() === passwordToCheck){
            document.querySelector("div").textContent = messages[i];
        }
    }
}

inputBox.addEventListener("input", showMessage);