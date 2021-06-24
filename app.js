document.addEventListener("keydown", (e) => {
  //   console.log(e.key);
  createCircle();
  switch (e.key) {
    case "a":
      play("./assets/A2.mp3");
      break;
    case "s":
      play("./assets/A3.mp3");
      break;
    case "d":
      play("./assets/A4.mp3");
      break;
    case "f":
      play("./assets/A5.mp3");
      break;
    case "g":
      play("./assets/Ab2.mp3");
      break;
    case "h":
      play("./assets/Ab3.mp3");
      break;
    case "j":
      play("./assets/Ab4.mp3");
      break;
    case "k":
      play("./assets/Ab5.mp3");
      break;
    case "l":
      play("./assets/B2.mp3");
      break;
    case ";":
      play("./assets/B3.mp3");
      break;

    case "q":
      play("./assets/B4.mp3");
      break;
    case "w":
      play("./assets/B5.mp3");
      break;
    case "r":
      play("./assets/Bb2.mp3");
      break;
    case "t":
      play("./assets/Bb3.mp3");
      break;
    case "y":
      play("./assets/Bb4.mp3");
      break;
    case "u":
      play("./assets/Bb5.mp3");
      break;
    case "i":
      play("./assets/C3.mp3");
      break;
    case "o":
      play("./assets/C4.mp3");
      break;
    case "p":
      play("./assets/C5.mp3");
      break;
    case "e":
      play("./assets/C6.mp3");
      break;
  }
});

let container = document.querySelector(".container");
const createCircle = () => {
  let positionX = `${Math.ceil(Math.random() * 100)}%`;
  let positionY = `${Math.ceil(Math.random() * 100)}%`;
  const circle = document.createElement("span");
  container.appendChild(circle);
  circle.classList.add("circle");
  circle.style.top = positionX;
  circle.style.left = positionY;
  circle.style.background = generateColor();
};

const generateColor = () => {
  let str = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i <= 5; i++) {
    color += str[Math.ceil(Math.random() * 16)];
  }
  return color;
};

const play = (src) => {
  var audio = new Audio(src);

  if (audio.duration > 0 && !audio.paused) {
    let audioObj = new Audio(src);
    audioObj.play();
  }
  audio.play();
};
