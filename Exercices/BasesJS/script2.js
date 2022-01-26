// Sélecteurs
////document.querySelector("h4").style.background = "yellow";

////const baliseHTML = document.querySelector("h4");

////console.log(baliseHTML);

////baliseHTML.style.background = "green";

//------------------------

//Click event

const questionContainer = document.querySelector(".click-event");
const btn1 = document.getElementById("btn-1");
const btn2 = document.getElementById("btn-2");
const response = document.querySelector("p");

btn1.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "green";
  console.log("test");
});

btn2.addEventListener("click", () => {
  response.classList.add("show-response");
  response.style.background = "red";
});

//<div>  >  #id  >  .class  >  baliseHTML
//----------------------

//Mouse Events

const mouseMove = document.querySelector(".mousemove");

window.addEventListener("mousemove", (e) => {
  mouseMove.style.left = e.pageX + "px";
  mouseMove.style.top = e.pageY + "px";
  console.log("mouse");
});

window.addEventListener("mousedown", () => {
  mouseMove.style.transform = "scale(2) translate(-25%, -25%)";
});

window.addEventListener("mouseup", () => {
  mouseMove.style.transform = "scale(1) translate(-50%, -50%)";
});

response.addEventListener("mouseover", () => {
  response.style.transform = "rotate(2deg)";
});

//----------------------

// Key Press event

const keypressContainer = document.querySelector(".keypress");
const key = document.getElementById("key");

const ring = (key) => {
  const audio = new Audio();
  audio.src = key + ".mp3";
  audio.play();
};

document.addEventListener("keypress", (e) => {
  key.textContent = e.key;
  if (
    e.key === "a" ||
    e.key === "o" ||
    e.key === "e" ||
    e.key === "i" ||
    e.key === "u"
  ) {
    keypressContainer.style.background = "pink";
  } else {
    keypressContainer.style.background = "rgb(218, 162, 255)";
  }

  //ring(e.key);
});

//----------------------

// Scroll event

const nav = document.querySelector("nav");

window.addEventListener("scroll", () => {
  if (window.scrollY > 100) {
    nav.style.top = 0;
  } else {
    nav.style.top = "-70px";
  }
});

//----------------------

// Forms event

const inputName = document.querySelector('input[type="text"]');
const select = document.querySelector("select");
const form = document.querySelector("form");
let pseudo = "";
let language = "";

inputName.addEventListener("input", (e) => {
  pseudo = e.target.value;
});

select.addEventListener("input", (e) => {
  language = e.target.value;
});

form.addEventListener("submit", (e) => {
  e.preventDefault();

  if (cgv.checked) {
    document.querySelector("form > div").innerHTML = `
      <h3>Pseudo : ${pseudo}</h3>
      <h4>Langage préféré : ${language}</h4>
    `;
  } else {
    alert("Veuillez accepter les CGV");
  }
});

//----------------------

// Load Event

window.addEventListener("load", () => {
  console.log("");
});

//----------------------

//For each

const boxes = document.querySelectorAll(".box");

boxes.forEach((box) => {
  box.addEventListener("click", (e) => {
    console.log(e.target);
  });
});
