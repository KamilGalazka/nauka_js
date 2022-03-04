const inputV = document.querySelector("input");
const ulV = document.querySelector("ul");

let counter = 0;

function removeTaskFromList (event) {
    event.target.parentNode.remove();
}

function addTaskToList(event) {
  event.preventDefault();
  const inputValue = inputV.value;

  if (inputValue != "") {
    const newListElement = document.createElement("li");
    newListElement.dataset.key = `${counter}`;
    const newButton = document.createElement("button");
    newListElement.textContent = inputValue;
    newButton.textContent = "DONE";
    newButton.style.marginLeft = "50px";
    ulV.appendChild(newListElement);
    const liV = document.querySelector(`[data-key="${counter}"`);
    liV.appendChild(newButton);
    newButton.addEventListener("click", removeTaskFromList);
    inputV.value = "";
    counter++;
  }

}

document.querySelector("button").addEventListener("click", addTaskToList);
