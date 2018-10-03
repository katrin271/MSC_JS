const form = document.forms[0];
const insert=document.querySelector(".total");
form.onsubmit = function() {
  insert.innerHTML=Math.sin(form.elements.quantility.value);
}
