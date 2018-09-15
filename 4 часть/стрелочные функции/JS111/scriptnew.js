let many=prompt("Сколько у вас с собой есть денег?")
let appl=prompt("Сколько вы купили яблок?")
let bread=prompt("Сколько вы куполи батонов хлеба?")
let price1= prompt("Сколько стоит одно яблоко?")
let cost1=parseFloat(appl)*parseFloat(price1)
let price2=prompt("Сколько стоит один батон хлеба?")
let cost2=parseFloat(bread)*parseFloat(price2)
let balanse=(cost1+cost2)
let myBalanse=(element)=>{
	(balanse>=many)? document.body.innerHTML="Вам хватает денег на покупки":document.body.innerHTML="Вам не хватает денег"
}
myBalanse(document.body);