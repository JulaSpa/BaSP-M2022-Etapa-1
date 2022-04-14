//Exercise "A"

function suma (num1, num2){
    var rta = num1 + num2
    return rta
}
suma()

var resultado = suma(5, 8)

console.log(resultado)

//Exercise "B"

function suma2 (num1, num2){
    
    var rta = num1 + num2
    return rta

    
   
   
}
suma2()


var resultado2 = suma2(5, 2.9)

if(isNaN(resultado2)){
    alert("One parameter is not a number")
    resultado2 = NaN
    console.log(resultado2)
}else {
    console.log(resultado2)
}


//Exercise "C"

function validateInteger(num){
    if(Number.isInteger(num)){
        return true
    } else {
        return false
    }
}

var numberV = validateInteger(1.2);

console.log(numberV)

//Exercise "D"

function integerNumber(int){
    var int = resultado2
    if (Number.isInteger(int)){
        return console.log(int)
    } else {
        alert("The number is not an integer, it will be converted")
        console.log(Math.round(int))
    }
}

integerNumber()

