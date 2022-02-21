document.body.style.height = 10000 + "px";

let divSize = 10;
let color = 0;
const newDiv = document.createElement("div");
newDiv.style.width = 100 + "%";
newDiv.style.position = "fixed";
newDiv.style.left = 0 + "px";
newDiv.style.top = 0 + "px";

document.body.appendChild(newDiv);

const changeHeight = function () {
  if (divSize >= window.innerHeight / 2) color = 1;
  else if (divSize <= 0) color = 0;

  if (color == 0) {
    newDiv.style.backgroundColor = "green";
    divSize += 5;
    newDiv.style.height = divSize + "px";
  } else {
    newDiv.style.backgroundColor = "red";
    divSize -= 5;
    newDiv.style.height = divSize + "px";
  }
};

const event = document.addEventListener("scroll", changeHeight);
