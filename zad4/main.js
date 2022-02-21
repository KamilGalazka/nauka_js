let size = 10;
let orderElement = 1;

const init = () => {
  const btnCreate = document.createElement("button");
  btnCreate.textContent = "Dodaj 10 elementów listy";
  document.body.appendChild(btnCreate);

  const ulCreate = document.createElement("ul");
  document.body.appendChild(ulCreate);

  const btn = document.querySelector("button");
  btn.addEventListener("click", createLiElements);
};

const createLiElements = () => {
  for (let i = 0; i < 10; i++) {
    const liCreate = document.createElement("li");
    liCreate.textContent = "Element nr " + orderElement;
    orderElement++;
    liCreate.style.fontSize = size + "px";
    size++;
    document.querySelector("ul").appendChild(liCreate);
  }
};

init();