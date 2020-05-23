console.log("CZeść to ja Jacek");
const name = "Kamil";
const age = "23";
console.log(name);
console.log(age);
console.log(`Siema jestem ${name} i mam ${age} lata.`);

const learn = document.querySelector(".learn--js");

console.log(learn);
learn.innerHTML = "Hello World, How are you ?";

function calculate(myNumber) {
  console.log(`Mój numer to ${myNumber}`);
  console.log(`wynik ${myNumber * 7}`);
  return myNumber;
}

const myresult = calculate(1);
console.log(myresult);

calculate(2);

function greet(age, name) {
  console.log(`mój wiek to ${age} albo ${name}`);
  return `Cześć jestm ${name} i mam ${age} lata`;
}

const myGreet = greet(age, name);
console.log(myGreet);

greet(2, 5);

function changeContent(querySelector, content) {
  const element = document.querySelector(querySelector);
  element.innerHTML = content;
}

const comeBack = changeContent(
  ".learn--js",
  "Hello world its me i changed you in JS"
);

console.log(comeBack);

function f(x) {
  x = x + 2;
  console.log(x);
  x = x * 5;
  console.log(x);
  return x * 10;
}
f(5);
console.log(f(1));

const calculateNew = (age) => {
  return age + 3;
};

console.log(calculateNew(1));

const Planet = {
  name: "earth",
  age: 2000,
  poulation: true,
  kick: (target) => {
    return `Kick ${target} in ass`;
  },
  King: {
    name: "Ja",
    age: 29,
  },
};

console.log(Planet.King.name);

const target = 35;
console.log(Planet.kick(target));

console.log(console);

if ((Planet.King.name == "Jacek") || (Planet.King.name == "Jace")) {
  console.log("Zgadza się");
} else if (Planet.King.name == "Jac") {
  console.log("Prawie zgadza sie");
} else console.log("To już sam nie wiem");

25 === "25" ? console.log(true) : console.log(false);

switch (Planet.King.age) {
  case 27:
    console.log("Mam 27 lat");
    break;
  case 28:
    console.log("Mam 28 lat");
    break;
  default:
    console.log("Sam już nie wime ile mam lat");
}
