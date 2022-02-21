let fontSizeLi = 10;
let counter = 0;
const varLi = document.querySelectorAll("li");

function setFontSize(item) {
  item.style.fontSize = fontSizeLi + "px";
}

const btn = document.querySelector("button");
btn.addEventListener("click", function () {
  if (counter == 0) {
    counter++;
    for (let i = 0; i < varLi.length; i++) {
      varLi.forEach(setFontSize);
      varLi[i].style.display = "block";
    }
  } else {
    fontSizeLi++;
    varLi.forEach(setFontSize);
  }
});
