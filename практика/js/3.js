const color1=prompt ("Какой будет фон у страницы?");
const Page=document.querySelector(".page");
console.log(Page);
Page.style.backgroundColor=color1;
const Color2=prompt("Какой будет цвет текста на странице?");
Page.style.color=Color2;
const YourName=prompt ("Как зовут человека, который вас вдохновляет?");
console.log("YourName");
const Mama=document.querySelector(".name");
console.log(Mama.className);
Mama.innerHTML = YourName;
const myimg = prompt("Введите адрес картинки");
const imageBlock=document.querySelector("img");
imageBlock.setAttribute("src", "myimg");
const text=prompt("Введите техт страницы");
const Papa=document.querySelector(".shortBio");
console.log(Papa.className);
Papa.innerHTML=text;
Papa.className += " animated";