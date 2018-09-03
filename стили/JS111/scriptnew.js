console.log("you are at"+window.location);
const Colored = document.querySeSelector(".colored");
 console.log(Colored);

console.log(Colored.style);

let quest = prompt("какой ты хочешь цвет?");
Colored.style.backgroundColor = "blue";
Colored.style["background-color"] = quest;
