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

var chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];
var nums = ["0","1","2","3","4","5","6","7","8","9"]
var charsAndNums = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];

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

function filter(e){

    var name = e.target.value
    console.log(name)
    nameInputReq = document.getElementById("nameInputReq")
    for(i=0;i<name.length;i++){
            var newName =Array.from(name[i]) 
            console.log(newName)
            for(i=0;i<chars.length;i++){
               const letter=chars[i]
               console.log(letter)
                if(letter.toLocaleLowerCase().indexOf(newName)!=-1 && nameInput.value.length>3){
                    e.target.style.backgroundColor = "" 
                    nameInput.style.color = "black"
                    e.target.style.borderColor = "black"
                    nameInputReq.style.display="none"
                    nameInputReq.style.color="black"
                    console.log("letra")
                    break
                }else {
                    nameInput.style.color = "red"
                    e.target.style.borderColor = "red"
                    nameInput.style.color="red"
                    nameInputReq.style.display="block"
                    nameInputReq.style.color="red"
                    console.log("no letra")
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
            var newName =Array.from(name[i]) 
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
                    break
                }else {
                    lastNameInput.style.color = "red"
                    e.target.style.borderColor = "red"
                    lastNameInputReq.style.display="block"
                    lastNameInputReq.style.color="red"
                    
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
    
    var dniReq = document.getElementById("dniReq")
    for(i=0;i<dniNums.length;i++){
        var newDni =Array.from(dniNums[i]) 
        
        for(i=0;i<nums.length;i++){
           const newNumbs=nums[i]
           
            if(newNumbs.toLocaleLowerCase().indexOf(newDni)!=-1 && dni.value.length>7){
                e.target.style.backgroundColor = "" 
                dni.style.color = "black"
                e.target.style.borderColor = "black"
                dniReq.style.display="none"
                dniReq.style.color="black"
                break
            }else {
                lastNameInput.style.color = "red"
                e.target.style.borderColor = "red"
                dniReq.style.display="block"
                dniReq.style.color="red"
                
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
        var newPhone =Array.from(phoneNum[i]) 
        
        for(i=0;i<nums.length;i++){
           const newNum=nums[i]
           
            if(newNum.toLocaleLowerCase().indexOf(newPhone)!=-1 && phoneInput.value.length>10){
                e.target.style.backgroundColor = "" 
                phoneInput.style.color = "black"
                e.target.style.borderColor = "black"
                phoneReq.style.display="none"
                phoneReq.style.color="black"
                break
            }else {
                phoneInput.style.color = "red"
                e.target.style.borderColor = "red"
                phoneReq.style.display="block"
                phoneReq.style.color="red"
                
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
        var newAdress =Array.from(adressNum[i]) 
        
        for(i=0;i<charsAndNums.length;i++){
           const newNum=charsAndNums[i]
           
            if(newNum.toLocaleLowerCase().indexOf(newAdress)!=-1 && adressInput.value.length>5){
                e.target.style.backgroundColor = "" 
                adressInput.style.color = "black"
                e.target.style.borderColor = "black"
                adressReq.style.display="none"
                adressReq.style.color="black"
                break
            }else {
                adressInput.style.color = "red"
                e.target.style.borderColor = "red"
                adressReq.style.display="block"
                adressReq.style.color="red"
                
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
            var newName =Array.from(name[i]) 
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
                    break
                }else {
                    cityInput.style.color = "red"
                    e.target.style.borderColor = "red"
                    cityReq.style.display="block"
                    cityReq.style.color="red"
                    
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
        var newPostal =Array.from(postalNum[i]) 
        
        for(i=0;i<nums.length;i++){
           const newNum=nums[i]
           
            if(newNum.toLocaleLowerCase().indexOf(newPostal)!=-1 && postalInput.value.length>=4 && postalInput.value.length<=4){
                e.target.style.backgroundColor = "" 
                postalInput.style.color = "black"
                e.target.style.borderColor = "black"
                postalReq.style.display="none"
                postalReq.style.color="black"
                break
            }else {
                postalInput.style.color = "red"
                e.target.style.borderColor = "red"
                postalReq.style.display="block"
                postalReq.style.color="red"
                
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
        } else {
            e.target.style.borderColor = "red"
            inputEmail.style.color="red"
            errorEmail.style.display="block"
         
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
        var newAdress =Array.from(adressNum[i]) 
        
        for(i=0;i<charsAndNums.length;i++){
           const newNum=charsAndNums[i]
           
            if(newNum.toLocaleLowerCase().indexOf(newAdress)!=-1 && inputPassword.value.length>8){
                e.target.style.backgroundColor = "" 
                inputPassword.style.color = "black"
                e.target.style.borderColor = "black"
                passwordReq.style.display="none"
                passwordReq.style.color="black"
                break
            }else {
                inputPassword.style.color = "red"
                e.target.style.borderColor = "red"
                passwordReq.style.display="block"
                passwordReq.style.color="red"
                
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
        var newAdress =Array.from(adressNum[i]) 
        
        for(i=0;i<charsAndNums.length;i++){
           const newNum=charsAndNums[i]
           
            if(newNum.toLocaleLowerCase().indexOf(newAdress)!=-1 && inputPasswordRepeat.value.length>8){
                e.target.style.backgroundColor = "" 
                inputPasswordRepeat.style.color = "black"
                e.target.style.borderColor = "black"
                passwordRepeatReq.style.display="none"
                passwordRepeatReq.style.color="black"
                break
            }else {
                inputPasswordRepeat.style.color = "red"
                e.target.style.borderColor = "red"
                passwordRepeatReq.style.display="block"
                passwordRepeatReq.style.color="red"
                
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
    var modal = document.getElementById("modal")

    modal.style.display="block"
})