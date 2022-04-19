//Exercise "A"

var numRandom = Math.random()
if (numRandom >= 0.5){
    alert("Exercise 04-A:" + "Greater than 0,5")
} else {
    alert ("Exercise 04-A:" + "Lower than 0,5")
}
console.log("Exercise 04-A:" + numRandom)

//Exercise "B"

const age = 30;
if (age<2){
    alert("Exercise 04-B:" + "Bebé")
} else if (age>=2 && age<=12){
    alert("Exercise 04-B:" + "Niño")
} else if (age >=13 && age<=19){
    alert ("Exercise 04-B:" + "Adolescente")
} else if (age >=20 && age<=30){
    alert ("Exercise 04-B:" + "Joven")
} else if (age>=31 && age<=60){
    alert ("Exercise 04-B:" + "Adulto")
} else if ( age >=61 && age<=75){
    alert ("Exercise 04-B:" + "Adulto mayor")
} else {
    alert ("Exercise 04-B:" + "Anciano")
}

 