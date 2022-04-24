var inputEmail = document.getElementById("inputEmail")
var inputPassword = document.getElementById("inputPassword")
var button = document.getElementById("button")
var emailText = document.getElementById("emailText")
var errorEmail= document.getElementById("errorEmail")
var passwordText = document.getElementById("passwordText")
var modal = document.getElementById("modal")
var ul = document.getElementById("ul")
var modalH = document.getElementById("modal-h2")
var modalP = document.getElementById("modal-p")
var close = document.getElementById("close")

var emailValid=["@","gmail",".com"]
inputEmail.addEventListener("blur", (e)=>{
    for(i=0;i<emailValid.length;i++){
        validE=emailValid[i]
        if(inputEmail.value.includes(validE)){
            e.target.style.backgroundColor = "" 
            emailText.style.color = "black"
            e.target.style.borderColor = "black"
            inputEmail.style.color="black"
        } else {
            emailText.style.color = "red"
            e.target.style.borderColor = "red"
            inputEmail.style.color="red"
            errorEmail.style.display="block"
        }
    }    
})
inputEmail.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    emailText.style.color = "black"
    e.target.style.borderColor = "black"
    inputEmail.style.color="black"
    errorEmail.style.display="none"
}) 
var chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var nums = ["0","1","2","3","4","5","6","7","8","9"];
var signs = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-","."];

inputPassword.addEventListener("keyup",filter)
inputPassword.addEventListener("blur",filter)
function filter(e){
    var name = e.target.value
    nameInputReq = document.getElementById("nameInputReq")
    var letterSum = 0;
    var numSum = 0;
    var signsSum = 0;
    for(i=0;i<name.length;i++){
            var newName =name[i]
            if(chars.indexOf(newName)!=-1){
                letterSum++
            } else if(nums.indexOf(newName)!=-1){
                numSum++
            } else if (signs.indexOf(newName)!=1){
                signsSum ++
            }
    }
    if(letterSum>=1 && numSum>=1 && signsSum ==0){
        e.target.style.backgroundColor = "" 
        passwordText.style.color = "black"
        e.target.style.borderColor = "black"
        inputPassword.style.color="black"
        passwordValid = true;
    } else{
        passwordText.style.color = "red"
        e.target.style.borderColor = "red"
        inputPassword.style.color="red"
        passwordValid=false;  
    }
                
}
inputPassword.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    passwordText.style.color = "black"
    e.target.style.borderColor = "black"
    inputPassword.style.color="black"
    errorPassword.style.display="none"
})  
button.addEventListener("click", value)
function value(e, text,pass){
    e.preventDefault();
    modal.style.display="block"
    if(inputEmail.value=="" || inputPassword.value=="" || inputEmail.value.includes(validE)==false || passwordValid==false){
        console.log("completaaaa")
        modalH.style.display="none"
        modalP.style.display="block"
        modalP.style.color="red"
        modalP.style.background="white"
        modalP.style.textAlign="center"
        modalP.style.marginTop="20%"
        modalP.style.paddingTop="10%"
        modalP.style.marginRight="10%"
        modalP.style.marginLeft="10%"
        modalP.style.height="15%"
        modalP.style.borderRadius="2px"
    } else{
        modalH.style.display="block"
        modalP.style.display="none"
        modalH.style.fontSize="15px"
        modalH.style.marginTop="10%"
        modalH.style.color="white"
        modalH.style.marginLeft="5%"
        var liEmail=document.createElement("li")
        liEmail.appendChild(document.createTextNode(`Email: ${inputEmail.value}`))
        ul.appendChild(liEmail)
        var lipass=document.createElement("li")
        lipass.appendChild(document.createTextNode(`Password: ${inputPassword.value}`))
        ul.appendChild(lipass)
        liEmail.style.color="white"
        lipass.style.color="white"
        liEmail.style.marginLeft="5%"
        lipass.style.marginLeft="5%"
        liEmail.style.marginTop="5%"
        lipass.style.marginTop="5%"
    } 
}
close.addEventListener("click", (e)=>{
    modal.style.display="none"
})
