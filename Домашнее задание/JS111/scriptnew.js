let many=prompt("Сколько у вас с собой есть денег?")
let appl=prompt("Сколько вы купили яблок?")
let bread=prompt("Сколько вы куполи батонов хлеба?")
let price1= prompt("Сколько стоит одно яблоко?")
let cost1=parseFloat(appl)*parseFloat(price1)
let price2=prompt("Сколько стоит один батон хлеба?")
let cost2=parseFloat(bread)*parseFloat(price2)
let balanse=parseFloat(many)>=(cost1+cost2)
document.body.innerHTML=balanse