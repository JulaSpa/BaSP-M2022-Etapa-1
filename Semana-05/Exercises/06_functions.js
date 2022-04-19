//Exercise "A"

function suma (num1, num2, rta){
    var rta = num1 + num2
    numberValidation(num1, num2, rta)
    integerNumber(num1, num2, rta)
    console.log("Exercise 06-A:" + rta)
    return rta
}
var value = suma(2, 2.8)

//Exercise "B"

function numberValidation(num1, num2, rta){
    if(isNaN(num1 && num2)){
        alert("One parameter is not a number")
        console.log("Exercise 06-B:" + NaN)
    }else {
        
        console.log("Exercise 06-B:" + rta)
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

function integerNumber(num1, num2, rta){
    if (Number.isInteger(num1 && num2)){
        return console.log("Exersice 06-D:" + rta)
    } else {
        alert("The number is not an integer, it will be converted")
        var rta2 = Math.round(num1) + Math.round(num2)
        return console.log("Exercise 06-D conv:" + rta2)

    }
}



