var nameInput = document.getElementById("nameInput")
var lastNameInput = document.getElementById("lastNameInput")
var dni = document.getElementById("dni")
var phoneInput = document.getElementById("phoneInput")
var adressInput = document.getElementById("adressInput")
var cityInput = document.getElementById("cityInput")
var postalInput = document.getElementById("postalInput")
var inputEmail = document.getElementById("inputEmail")
var errorEmail = document.getElementById("errorEmail")
var inputPassword = document.getElementById("inputPassword")
var inputPasswordRepeat = document.getElementById("inputPasswordRepeat")
var buttonCreate = document.getElementById("button")
var close = document.getElementById("close")


nameInput.addEventListener("blur",filter)
lastNameInput.addEventListener("blur",filterLastname)
dni.addEventListener("blur",filterdni)
phoneInput.addEventListener("blur",filterPhone)
adressInput.addEventListener("blur",filterAdress)
cityInput.addEventListener("blur",filterCity)
postalInput.addEventListener("blur",filterBlur)
inputPassword.addEventListener("blur",filterPass)
inputPasswordRepeat.addEventListener("blur",filterPassR)

var chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
var nums = ["0","1","2","3","4","5","6","7","8","9"];
var signs = ["!","#","$","%","&","/","(",")","=","?","¡","¿","+","*","[","]","{","}","-","."];

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
    if(letterSum>=3 && numSum==0 && signsSum ==0){
        e.target.style.backgroundColor = "" 
        nameInput.style.color = "black"
        e.target.style.borderColor = "black"
        nameInputReq.style.display="none"
        nameInputReq.style.color="black"
        nameCondition = true;
    } else{
                    nameInput.style.color = "red"
                    e.target.style.borderColor = "red"
                    nameInput.style.color="red"
                    nameInputReq.style.display="block"
                    nameInputReq.style.color="red"
                    nameCondition = false;
    }

}
nameInput.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    nameInput.style.color = "black"
    e.target.style.borderColor = "black"
    nameInput.style.color="black"
    nameInputReq.style.display="none"
})  

function filterLastname(e){
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
    if(letterSum>=3 && numSum==0 && signsSum ==0){
                    e.target.style.backgroundColor = "" 
                    lastNameInput.style.color = "black"
                    e.target.style.borderColor = "black"
                    lastNameInputReq.style.display="none"
                    lastNameInputReq.style.color="black"
                    lastNameCondition = true;
    } else{
        lastNameInput.style.color = "red"
        e.target.style.borderColor = "red"
        lastNameInputReq.style.display="block"
        lastNameInputReq.style.color="red"
        lastNameCondition = false;
    }    
}
lastNameInput.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    lastNameInput.style.color = "black"
    e.target.style.borderColor = "black"
    lastNameInput.style.color="black"
    lastNameInputReq.style.display="none"
})  
function filterdni(e){
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
    if(letterSum==0 && numSum>=7 && signsSum ==0){
        e.target.style.backgroundColor = "" 
        dni.style.color = "black"
        e.target.style.borderColor = "black"
        dniReq.style.display="none"
        dniReq.style.color="black"
        dniCondition = true;
    } else{
        dni.style.color = "red"
        e.target.style.borderColor = "red"
        dniReq.style.display="block"
        dniReq.style.color="red"
        dniCondition = false;
    }
}
dni.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    dni.style.color = "black"
    e.target.style.borderColor = "black"
    dni.style.color="black"
    dniReq.style.display="none"
})  
function filterPhone(e){
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
    if(letterSum==0 && numSum>=10 && signsSum ==0){
        e.target.style.backgroundColor = "" 
                phoneInput.style.color = "black"
                e.target.style.borderColor = "black"
                phoneReq.style.display="none"
                phoneReq.style.color="black"
                filterPhoneCondition = true;
    } else{
        phoneInput.style.color = "red"
        e.target.style.borderColor = "red"
        phoneReq.style.display="block"
        phoneReq.style.color="red"
        filterPhoneCondition = false;
    }
                
}
phoneInput.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    phoneInput.style.color = "black"
    e.target.style.borderColor = "black"
    phoneInput.style.color="black"
    phoneReq.style.display="none"
}) 
function filterAdress(e){
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
    if(letterSum>=4 && numSum>=1 && signsSum ==0){
        e.target.style.backgroundColor = "" 
        adressInput.style.color = "black"
        e.target.style.borderColor = "black"
        adressReq.style.display="none"
        adressReq.style.color="black"
        filterAdressCondition = true;
    } else{
        adressInput.style.color = "red"
        e.target.style.borderColor = "red"
        adressReq.style.display="block"
        adressReq.style.color="red"
        filterAdressCondition = false;
    }

}
adressInput.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    adressInput.style.color = "black"
    e.target.style.borderColor = "black"
    adressInput.style.color="black"
    adressReq.style.display="none"
}) 
function filterCity(e){
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
    if(letterSum>3 && numSum==0 && signsSum ==0){
        e.target.style.backgroundColor = "" 
        cityInput.style.color = "black"
        e.target.style.borderColor = "black"
        cityReq.style.display="none"
        cityReq.style.color="black"
        filterCityCondition = true;
    } else{
        cityInput.style.color = "red"
        e.target.style.borderColor = "red"
        cityReq.style.display="block"
        cityReq.style.color="red"
        filterCityCondition = false;
    }
}

cityInput.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    cityInput.style.color = "black"
    e.target.style.borderColor = "black"
    cityInput.style.color="black"
    cityReq.style.display="none"
}) 
function filterBlur(e){
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
    if(letterSum==0 && numSum>=4 && numSum<=5  && signsSum ==0){
        e.target.style.backgroundColor = "" 
        postalInput.style.color = "black"
        e.target.style.borderColor = "black"
        postalReq.style.display="none"
        postalReq.style.color="black"
        postalCondition = true;
    } else{
        postalInput.style.color = "red"
        e.target.style.borderColor = "red"
        postalReq.style.display="block"
        postalReq.style.color="red"
        postalCondition = false;
    }
                
               
}
 postalInput.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    postalInput.style.color = "black"
    e.target.style.borderColor = "black"
    postalInput.style.color="black"
    postalReq.style.display="none"
   
})  
var emailValid=["@","gmail",".com"]
inputEmail.addEventListener("blur", (e)=>{
    for(i=0;i<emailValid.length;i++){
        validE=emailValid[i]  
        if(inputEmail.value.includes(validE)){
            e.target.style.backgroundColor = "" 
            e.target.style.borderColor = "black"
            inputEmail.style.color="black"
            filterEmailCondition = true;
        } else {
            e.target.style.borderColor = "red"
            inputEmail.style.color="red"
            errorEmail.style.display="block"
            filterEmailCondition = false;
        }
    } 
})
inputEmail.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    e.target.style.borderColor = "black"
    inputEmail.style.color="black"
    errorEmail.style.display="none"
}) 
function filterPass(e){
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
    if(letterSum>=1 && numSum>=1 && signsSum ==0 && inputPassword.value.length>=8){
        e.target.style.backgroundColor = "" 
        inputPassword.style.color = "black"
        e.target.style.borderColor = "black"
        passwordReq.style.display="none"
        passwordReq.style.color="black"
        filterPassCondition = true;
    } else{
        inputPassword.style.color = "red"
        e.target.style.borderColor = "red"
        passwordReq.style.display="block"
        passwordReq.style.color="red"
        filterPassCondition = false;
    }

}
inputPassword.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    e.target.style.borderColor = "black"
    inputPassword.style.color="black"
    passwordReq.style.display="none"
})
function filterPassR(e){
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
    if(letterSum>=1 && numSum>=1 && signsSum ==0 && inputPasswordRepeat.value.length>=8 && inputPasswordRepeat.value===inputPassword.value){
        e.target.style.backgroundColor = "" 
        inputPasswordRepeat.style.color = "black"
        e.target.style.borderColor = "black"
        passwordRepeatReq.style.display="none"
        passwordRepeatReq.style.color="black"
        filterPassRCondition = true;
    } else{
        inputPasswordRepeat.style.color = "red"
        e.target.style.borderColor = "red"
        passwordRepeatReq.style.display="block"
        passwordRepeatReq.style.color="red"
        filterPassRCondition = false;
    }         
}
inputPasswordRepeat.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    e.target.style.borderColor = "black"
    inputPasswordRepeat.style.color="black"
    passwordRepeatReq.style.display="none"
})
buttonCreate.addEventListener("click", (e)=>{
    console.log("hola")
    var modalP = document.getElementById("modal-p")
    var modalH = document.getElementById("modal-h2")
    var modal = document.getElementById("modal")
    if(inputEmail.value == "" || inputPasswordRepeat == "" || nameCondition==false || lastNameCondition == false || filterEmailCondition == false || dniCondition == false || filterPhoneCondition == false || filterAdressCondition == false || filterCityCondition == false || postalCondition == false || filterPassCondition == false || filterPassRCondition == false){
        modalP.style.display="block"
        modalH.style.display="none"
    } else{
        modalP.style.display="none"
        modalH.style.display="block"
        var liName = document.createElement("li")
        liName.classList.add("classList")
        var liLastName=document.createElement("li")
        liLastName.classList.add("classList")
        var liDni=document.createElement("li")
        liDni.classList.add("classList")
        var liEmail=document.createElement("li")
        liEmail.classList.add("classList")
        var liPhone=document.createElement("li")
        liPhone.classList.add("classList")
        var liAdress=document.createElement("li")
        liAdress.classList.add("classList")
        var liCity=document.createElement("li")
        liCity.classList.add("classList")
        var liPostal=document.createElement("li")
        liPostal.classList.add("classList")
        var liPass=document.createElement("li")
        liPass.classList.add("classList")
        liName.appendChild(document.createTextNode(`Name: ${nameInput.value}`))
        ul.appendChild(liName)
        liLastName.appendChild(document.createTextNode(`Last name: ${lastNameInput.value}`))
        ul.appendChild(liLastName)
        liDni.appendChild(document.createTextNode(`Dni: ${dni.value}`))
        ul.appendChild(liDni)
        liPhone.appendChild(document.createTextNode(`Phone: ${phoneInput.value}`))
        ul.appendChild(liPhone)
        liAdress.appendChild(document.createTextNode(`Adress: ${adressInput.value}`))
        ul.appendChild(liAdress)
        liCity.appendChild(document.createTextNode(`City: ${cityInput.value}`))
        ul.appendChild(liCity)
        liPostal.appendChild(document.createTextNode(`Postal: ${postalInput.value}`))
        ul.appendChild(liPostal)
        liEmail.appendChild(document.createTextNode(`Email: ${inputEmail.value}`))
        ul.appendChild(liEmail)
        liPass.appendChild(document.createTextNode(`Password: ${inputPassword.value}`))
        ul.appendChild(liPass)
    }
    modal.style.display="block"
})
close.addEventListener("click", (e)=>{
    modal.style.display="none"
})