//Exercise "A"

var text1 = "Buenos días Lucas"
console.log("Exercise 02-A:" + text1.toUpperCase())

//Exercise "B"

var text2 = "Buenos días Ramirez"
var res2 = text2.substring(0,5)
console.log("Exercise 02-B:" + res2)

//Exercise "C"

var text3 = "Buenos días Gonzalez"
var res3 = text3.substring(17,20)
console.log("Exercise 02-C:" + res3)

//Exercise "D"

var text4 = "buenos días Gomez"
var res4 = text4[0].toUpperCase() + text4.substring(1).toLowerCase();
console.log("Exercise 02-D:" + res4)

//Exercise "E"

var text5 = "buenos días Gomez"
var res5 = text5.indexOf(" ")
console.log("Exercise 02-E:" + res5)

//Exercise "F"

var text6 = "federico gonzalez"
console.log("Exercise 02-F:" + text6[0].toUpperCase() + text6.substring(1, text6.indexOf(" ")) + " " + text6[text6.indexOf("gonzalez")].toUpperCase() + text6.substring(text6.indexOf("onzalez"))) 