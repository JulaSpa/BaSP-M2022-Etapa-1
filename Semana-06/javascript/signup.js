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

nameInput.addEventListener("keyup",filter)
nameInput.addEventListener("blur",filter)
lastNameInput.addEventListener("keyup",filterLastname)
lastNameInput.addEventListener("blur",filterLastname)
dni.addEventListener("keyup",filterdni)
dni.addEventListener("blur",filterdni)
phoneInput.addEventListener("keyup",filterPhone)
phoneInput.addEventListener("blur",filterPhone)
adressInput.addEventListener("keyup",filterAdress)
adressInput.addEventListener("blur",filterAdress)
cityInput.addEventListener("keyup",filterCity)
cityInput.addEventListener("blur",filterCity)
postalInput.addEventListener("keyup",filterBlur)
postalInput.addEventListener("blur",filterBlur)
inputPassword.addEventListener("keyup",filterPass)
inputPassword.addEventListener("blur",filterPass)
inputPasswordRepeat.addEventListener("keyup",filterPassR)
inputPasswordRepeat.addEventListener("blur",filterPassR)

var chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nums = ["0","1","2","3","4","5","6","7","8","9"];
var charsAndNums = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];

function filter(e){
    var name = e.target.value
    nameInputReq = document.getElementById("nameInputReq")
    for(i=0;i<name.length;i++){
            var newName =name[i]
            for(i=0;i<chars.length;i++){
               const letter=chars[i]
                if(letter.toLocaleLowerCase().indexOf(newName)!=-1 && nameInput.value.length>3){
                    e.target.style.backgroundColor = "" 
                    nameInput.style.color = "black"
                    e.target.style.borderColor = "black"
                    nameInputReq.style.display="none"
                    nameInputReq.style.color="black"
                    nameCondition = true;
                    break
                }else {
                    nameInput.style.color = "red"
                    e.target.style.borderColor = "red"
                    nameInput.style.color="red"
                    nameInputReq.style.display="block"
                    nameInputReq.style.color="red"
                    nameCondition = false;
                }
            }
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
    console.log(name)
    var lastNameInputReq=document.getElementById("lastNameInputReq")
    for(i=0;i<name.length;i++){
            var newName =name[i]
            console.log(newName)
            for(i=0;i<chars.length;i++){
               const letter=chars[i]
               console.log(letter)
                if(letter.toLocaleLowerCase().indexOf(newName)!=-1 && lastNameInput.value.length>3){
                    e.target.style.backgroundColor = "" 
                    lastNameInput.style.color = "black"
                    e.target.style.borderColor = "black"
                    lastNameInputReq.style.display="none"
                    lastNameInputReq.style.color="black"
                    lastNameCondition = true;
                    break
                }else {
                    lastNameInput.style.color = "red"
                    e.target.style.borderColor = "red"
                    lastNameInputReq.style.display="block"
                    lastNameInputReq.style.color="red"
                    lastNameCondition = false;
                    
                }
            }
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
    var dniNums = e.target.value
    console.log(dniNums)
    var dniReq = document.getElementById("dniReq")
    for(i=0;i<dniNums.length;i++){
        var newDni =dniNums[i]
        for(i=0;i<nums.length;i++){
           const newNumbs=nums[i]
            if(newNumbs.toLocaleLowerCase().indexOf(newDni)!=-1){
                e.target.style.backgroundColor = "" 
                dni.style.color = "black"
                e.target.style.borderColor = "black"
                dniReq.style.display="none"
                dniReq.style.color="black"
                dniCondition = true;
                break
            }else {
                lastNameInput.style.color = "red"
                e.target.style.borderColor = "red"
                dniReq.style.display="block"
                dniReq.style.color="red"
                dniCondition = false;
            }
        }
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
    var phoneNum = e.target.value
    var phoneReq = document.getElementById("phoneReq") 
    for(i=0;i<phoneNum.length;i++){
        var newPhone =phoneNum[i]
        for(i=0;i<nums.length;i++){
           const newNum=nums[i]
            if(newNum.toLocaleLowerCase().indexOf(newPhone)!=-1){
                e.target.style.backgroundColor = "" 
                phoneInput.style.color = "black"
                e.target.style.borderColor = "black"
                phoneReq.style.display="none"
                phoneReq.style.color="black"
                filterPhoneCondition = true;
                break
            }else {
                phoneInput.style.color = "red"
                e.target.style.borderColor = "red"
                phoneReq.style.display="block"
                phoneReq.style.color="red"
                filterPhoneCondition = false;
            }
        }
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
    var adressNum = e.target.value
    var adressReq = document.getElementById("adressReq") 
    for(i=0;i<adressNum.length;i++){
        var newAdress =adressNum[i]
        for(i=0;i<charsAndNums.length;i++){
           const newNum=charsAndNums[i]  
            if(newNum.toLocaleLowerCase().indexOf(newAdress)!=-1){
                e.target.style.backgroundColor = "" 
                adressInput.style.color = "black"
                e.target.style.borderColor = "black"
                adressReq.style.display="none"
                adressReq.style.color="black"
                filterAdressCondition = true;
                break
            }else {
                adressInput.style.color = "red"
                e.target.style.borderColor = "red"
                adressReq.style.display="block"
                adressReq.style.color="red"
                filterAdressCondition = false;
            }
        }
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
    console.log(name)
    var cityReq=document.getElementById("cityReq")
    for(i=0;i<name.length;i++){
            var newName =name[i]
            console.log(newName)
            for(i=0;i<chars.length;i++){
               const letter=chars[i]
               console.log(letter)
                if(letter.toLocaleLowerCase().indexOf(newName)!=-1 && cityInput.value.length>3){
                    e.target.style.backgroundColor = "" 
                    cityInput.style.color = "black"
                    e.target.style.borderColor = "black"
                    cityReq.style.display="none"
                    cityReq.style.color="black"
                    filterCityCondition = true;
                    break
                }else {
                    cityInput.style.color = "red"
                    e.target.style.borderColor = "red"
                    cityReq.style.display="block"
                    cityReq.style.color="red"
                    filterCityCondition = false;
                }
            }
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
    var postalNum = e.target.value
    var postalReq = document.getElementById("postalReq") 
    for(i=0;i<postalNum.length;i++){
        var newPostal =postalNum[i]  
        for(i=0;i<nums.length;i++){
           const newNum=nums[i]
            if(newNum.toLocaleLowerCase().indexOf(newPostal)!=-1){
                e.target.style.backgroundColor = "" 
                postalInput.style.color = "black"
                e.target.style.borderColor = "black"
                postalReq.style.display="none"
                postalReq.style.color="black"
                postalCondition = true;
                break
            }else {
                postalInput.style.color = "red"
                e.target.style.borderColor = "red"
                postalReq.style.display="block"
                postalReq.style.color="red"
                postalCondition = false;
            }
        }  
}}
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
    var adressNum = e.target.value  
    var passwordReq = document.getElementById("passwordReq") 
    for(i=0;i<adressNum.length;i++){
        var newAdress =adressNum[i]
        for(i=0;i<charsAndNums.length;i++){
           const newNum=charsAndNums[i]
            if(newNum.toLocaleLowerCase().indexOf(newAdress)!=-1){
                e.target.style.backgroundColor = "" 
                inputPassword.style.color = "black"
                e.target.style.borderColor = "black"
                passwordReq.style.display="none"
                passwordReq.style.color="black"
                filterPassCondition = true;
                break
            }else {
                inputPassword.style.color = "red"
                e.target.style.borderColor = "red"
                passwordReq.style.display="block"
                passwordReq.style.color="red"
                filterPassCondition = false;
            }
        }
}
}
inputPassword.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    e.target.style.borderColor = "black"
    inputPassword.style.color="black"
    passwordReq.style.display="none"
})
function filterPassR(e){
    var adressNum = e.target.value
    var passwordRepeatReq = document.getElementById("passwordRepeatReq") 
    for(i=0;i<adressNum.length;i++){
        var newAdress =adressNum[i]
        for(i=0;i<charsAndNums.length;i++){
           const newNum=charsAndNums[i]
            if(newNum.toLocaleLowerCase().indexOf(newAdress)!=-1){
                e.target.style.backgroundColor = "" 
                inputPasswordRepeat.style.color = "black"
                e.target.style.borderColor = "black"
                passwordRepeatReq.style.display="none"
                passwordRepeatReq.style.color="black"
                filterPassRCondition = true;
                break
            }else {
                inputPasswordRepeat.style.color = "red"
                e.target.style.borderColor = "red"
                passwordRepeatReq.style.display="block"
                passwordRepeatReq.style.color="red"
                filterPassRCondition = false;
                
            }
        }
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
        var liLastName=document.createElement("li")
        var liDni=document.createElement("li")
        var liEmail=document.createElement("li")
        var liPhone=document.createElement("li")
        var liAdress=document.createElement("li")
        var liCity=document.createElement("li")
        var liPostal=document.createElement("li")
        var liPass=document.createElement("li")
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