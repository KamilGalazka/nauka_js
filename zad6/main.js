let red = 100,
  green = 100,
  blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

const changeColor = (e) => {
//   if (e.keyCode === 38) {
//     //up
//     red < 255 ? red++ : 255;
//     green < 255 ? green++ : 255;
//     blue < 255 ? blue++ : 255;
//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   } else if (e.keyCode === 40) {
//     //down
//     red > 0 ? red-- : 0;
//     green > 0 ? green-- : 0;
//     blue > 0 ? blue-- : 0;
//     document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
//   }

  switch (e.keyCode) {
    case 38:
      red < 255 ? red++ : 255;
      green < 255 ? green++ : 255;
      blue < 255 ? blue++ : 255;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      break;
    case 40:
      red > 0 ? red-- : 0;
      green > 0 ? green-- : 0;
      blue > 0 ? blue-- : 0;
      document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;
      break;
  }
};

window.addEventListener("keydown", changeColor);
