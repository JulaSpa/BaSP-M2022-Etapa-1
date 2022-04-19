//Exercise "A"

function suma (num1, num2){
    var rta = num1 + num2
    numberValidation(num1, num2)
    integerNumber(num1, num2)
    console.log("Exercise 06-A:" + rta)
    return rta
}
suma(2, 2)

//Exercise "B"

function numberValidation(num1, num2){
    if(isNaN(num1 && num2)){
        alert("One parameter is not a number")
        console.log("Exercise 06-B:" + NaN)
    }else {
        var rtaB = num1 + num2
        console.log("Exercise 06-B:" + rtaB)
    }
}

//Exercise "C"

function validateInteger(num){
    if(Number.isInteger(num)){
        return console.log("Exersice 06-C:" + num)
        
    } else {
        return console.log("Exersice 06-C: Is not an integer")
    }
}
var numberV = validateInteger(1.2);

//Exercise "D"

function integerNumber(num1, num2){
    if (Number.isInteger(num1 && num2)){
        var rtaD = num1 + num2
        return console.log("Exersice 06-D:" + rtaD)
    } else {
        alert("The number is not an integer, it will be converted")
        var rta2D = Math.round(num1) + Math.round(num2)
        return console.log("Exercise 06-D conv:" + rta2D)

    }
}



