//obie parzyste - czerwony
//obie nieparzyste - niebieski
//jedna parzysta, druga nieparzysta - zielony

function setBackgroundColor() {
  const x = event.clientX;
  const y = event.clientY;
  console.log(x, y);

  if (x % 2 == 0 && y % 2 == 0) document.body.style.backgroundColor = "red";
  else if (x % 2 != 0 && y % 2 != 0)
    document.body.style.backgroundColor = "blue";
  else document.body.style.backgroundColor = "green";
}
document.body.addEventListener("click", setBackgroundColor);
