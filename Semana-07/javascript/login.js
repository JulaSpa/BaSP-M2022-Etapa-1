var inputEmail = document.getElementById("inputEmail")
var inputPassword = document.getElementById("inputPassword")
var button = document.getElementById("button")
var emailText = document.getElementById("emailText")
var errorEmail= document.getElementById("errorEmail")
var passwordText = document.getElementById("passwordText")
var errorPassword = document.getElementById("errorPassword")
var errorPasswordSign = document.getElementById("errorPasswordSign")
var errorPasswordSeven = document.getElementById("errorPasswordSeven")
var modal = document.getElementById("modal")
var ul = document.getElementById("ul")
var close = document.getElementById("close")
inputEmail.addEventListener("blur", (e)=>{
    var emailValid=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if(emailValid.test(e.target.value)){
            e.target.style.backgroundColor = "" 
            emailText.style.color = "black"
            e.target.style.borderColor = "black"
            inputEmail.style.color="black"
            emailV = true;
        } else {
            emailText.style.color = "red"
            e.target.style.borderColor = "red"
            inputEmail.style.color="red"
            errorEmail.style.display="block"
            emailV = false;
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
    var sumName = numSum + letterSum
    console.log(sumName)
    if(sumName>7 && signsSum ==0){
        e.target.style.backgroundColor = "" 
        passwordText.style.color = "black"
        e.target.style.borderColor = "black"
        inputPassword.style.color="black"
        errorPassword.style.display="none"
        errorPasswordSign.style.display="none"
        errorPasswordSeven.style.display="none"
        passwordValid = true;
    } else if(sumName==0 && signsSum ==0){
        passwordText.style.color = "red"
        e.target.style.borderColor = "red"
        inputPassword.style.color="red"
        errorPassword.style.display="block"
        passwordValid=false;  
    }   else if(signsSum >=1){
        passwordText.style.color = "red"
        e.target.style.borderColor = "red"
        inputPassword.style.color="red"
        errorPasswordSign.style.display="block"
        passwordValid=false; 
    } else if(numSum<7){
        passwordText.style.color = "red"
        e.target.style.borderColor = "red"
        inputPassword.style.color="red"
        errorPasswordSeven.style.display="block"
        passwordValid=false; 
    }
}
inputPassword.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    passwordText.style.color = "black"
    e.target.style.borderColor = "black"
    inputPassword.style.color="black"
    errorPassword.style.display="none"
    errorPasswordSign.style.display="none"
})
close.addEventListener("click", (e)=>{
    modal.style.display="none"
})
button.addEventListener('click', getData)
function getData(e){
    var url='https://basp-m2022-api-rest-server.herokuapp.com/login'
    url=url + "?email=" + inputEmail.value + "&password=" + inputPassword.value;
    e.preventDefault()
    modal.style.display="block"
    if(inputEmail.value == "" ||emailV==false||inputPassword.value == "" || passwordValid==false){
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(res){
            modalh2.innerHTML=res.errors[0].msg
            ul1.style.display="none"
            ul2.style.display="none"

        })
        .catch(function(err){
            console.log("error")
        })
    }else if(inputEmail.value !='rose@radiumrocket.com'
    ||inputPassword.value !='BaSP2022'){
        fetch(url)
        .then(function(res){
            return res.json()
        })
        .then(function(res){
            modalh2.innerHTML=res.msg
            ul1.style.display="none"
            ul2.style.display="none"
        })
    }else{
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(res){
            alert(res.msg)
            modalh2.innerHTML="Username and password:"
            ul1.style.display="block"
            ul2.style.display="block"
            ul1.innerHTML=`Email: ${inputEmail.value}`
            ul2.innerHTML=`Password: ${inputPassword.value}`
        })
        .catch(function(err){
            console.log("error")
        })
    }
}