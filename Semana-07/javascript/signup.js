var nameInput = document.getElementById("nameInput")
var lastNameInput = document.getElementById("lastNameInput")
var dni = document.getElementById("dni")
var phoneInput = document.getElementById("phoneInput")
var adressInput = document.getElementById("adressInput")
var cityInput = document.getElementById("cityInput")
var postalInput = document.getElementById("postalInput")
var inputEmail = document.getElementById("inputEmail")
var errorEmail = document.getElementById("errorEmail")
var dateInput = document.getElementById("date")
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
dateInput.addEventListener("blur", filterDate)

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
    } else if(letterSum==0 && numSum==0 && signsSum ==0){
        nameInputReq.innerHTML="Name is requiere"
        nameInput.style.color = "red"
        e.target.style.borderColor = "red"
        nameInput.style.color="red"
        nameInputReq.style.display="block"
        nameInputReq.style.color="red"
        nameCondition = false;
    } else if(letterSum<3 && numSum==0 && signsSum ==0){
        nameInputReq.innerHTML="More than 3 characters"
        nameInput.style.color = "red"
        e.target.style.borderColor = "red"
        nameInput.style.color="red"
        nameInputReq.style.display="block"
        nameInputReq.style.color="red"
        nameCondition = false;

    }else if(numSum>=1 && signsSum==0){
        nameInputReq.innerHTML="No Numbers"
        nameInput.style.color = "red"
        e.target.style.borderColor = "red"
        nameInput.style.color="red"
        nameInputReq.style.display="block"
        nameInputReq.style.color="red"
        nameCondition = false;
    }else if(signsSum>=1 && numSum==0){
        nameInputReq.innerHTML="No Signs"
        nameInput.style.color = "red"
        e.target.style.borderColor = "red"
        nameInput.style.color="red"
        nameInputReq.style.display="block"
        nameInputReq.style.color="red"
        nameCondition = false;
    } else if(signsSum>=1 && numSum>=1){
        nameInputReq.innerHTML="No Numbers or signs"
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
    nameInput.value=localStorage.getItem("name")
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
    if(letterSum>=3 && numSum==0 && signsSum==0){
        e.target.style.backgroundColor = "" 
        lastNameInput.style.color = "black"
        e.target.style.borderColor = "black"
        lastNameInputReq.style.display="none"
        lastNameInputReq.style.color="black"
        lastNameCondition = true;
    }else if(letterSum==0 && numSum==0 && signsSum==0){
        lastNameInputReq.innerHTML="Last Name is requiere"
        lastNameInput.style.color = "red"
        e.target.style.borderColor = "red"
        lastNameInput.style.color="red"
        lastNameInputReq.style.display="block"
        lastNameInputReq.style.color="red"
        lastNameCondition = false;
    }else if(letterSum<3 && numSum==0 && signsSum ==0){
        lastNameInputReq.innerHTML="More than 3 characters"
        lastNameInput.style.color = "red"
        e.target.style.borderColor = "red"
        lastNameInput.style.color="red"
        lastNameInputReq.style.display="block"
        lastNameInputReq.style.color="red"
        lastNameCondition = false;
    }else if(numSum>=1 && signsSum==0){
        lastNameInputReq.innerHTML="No Numbers"
        lastNameInput.style.color = "red"
        e.target.style.borderColor = "red"
        lastNameInput.style.color="red"
        lastNameInputReq.style.display="block"
        lastNameInputReq.style.color="red"
        lastNameCondition = false;
    }else if(signsSum>=1 && numSum==0){
        lastNameInputReq.innerHTML="No Signs"
        lastNameInput.style.color = "red"
        e.target.style.borderColor = "red"
        lastNameInput.style.color="red"
        lastNameInputReq.style.display="block"
        lastNameInputReq.style.color="red"
        lastNameCondition = false;
    }else if(signsSum>=1 && numSum>=1){
        lastNameInputReq.innerHTML="No Numbers or signs"
        lastNameInput.style.color = "red"
        e.target.style.borderColor = "red"
        lastNameInput.style.color="red"
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
    lastNameInput.value=localStorage.getItem("lastName")
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
    }else if(letterSum==0 && numSum==0 && signsSum ==0){
        dniReq.innerHTML="DNI is requiere"
        dni.style.color = "red"
        e.target.style.borderColor = "red"
        dniReq.style.display="block"
        dniReq.style.color="red"
        dniCondition = false;
    } else if (letterSum==0 && numSum<7 && signsSum ==0){
        dniReq.innerHTML="More 7 numbers"
        dni.style.color = "red"
        e.target.style.borderColor = "red"
        dniReq.style.display="block"
        dniReq.style.color="red"
        dniCondition = false;
    }else if(letterSum>=1 && signsSum==0){
        dniReq.innerHTML="No letters"
        dni.style.color = "red"
        e.target.style.borderColor = "red"
        dniReq.style.display="block"
        dniReq.style.color="red"
        dniCondition = false;
    }else if(signsSum>=1 && letterSum==0){
        dniReq.innerHTML="No Signs"
        dni.style.color = "red"
        e.target.style.borderColor = "red"
        dniReq.style.display="block"
        dniReq.style.color="red"
        dniCondition = false;
    } else if(signsSum>=1 && letterSum>=1){
        dniReq.innerHTML="No letters or signs"
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
    dni.value=localStorage.getItem("DNI")
}) 
function filterDate(e){
    date = e.target.value
    year = date.substring (0,4)
    month = date.substring (5,7)
    day = date.substring(8,10)
    var adult = 2022 - year
    console.log(adult)
    if(day>31 || month>12 || year<1920 || year>2023 || adult<18){
        dateReq.innerHTML="Invalid year or less than 18 age"
        dateInput.style.color = "red"
        dateInput.style.borderColor = "red"
        dateReq.style.display="block"
        dateReq.style.color="red"
        filterDateCondition = false;
    }else {
        dateInput.style.color = "black"
        dateInput.style.borderColor = "black"
        dateReq.style.display="none"
        dateReq.style.color="black"
        filterDateCondition = true;
    }
}
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
    } else if (letterSum==0 && numSum==0 && signsSum ==0){
        phoneReq.innerHTML="Phone is requiere"
        phoneInput.style.color = "red"
        e.target.style.borderColor = "red"
        phoneReq.style.display="block"
        phoneReq.style.color="red"
        filterPhoneCondition = false;
    }else if(numSum<10 && letterSum==0 && signsSum==0){
        phoneReq.innerHTML="More 10 letters"
        phoneInput.style.color = "red"
        e.target.style.borderColor = "red"
        phoneReq.style.display="block"
        phoneReq.style.color="red"
        filterPhoneCondition = false;
    }else if (letterSum>=1 && signsSum ==0){
        phoneReq.innerHTML="No letters"
        phoneInput.style.color = "red"
        e.target.style.borderColor = "red"
        phoneReq.style.display="block"
        phoneReq.style.color="red"
        filterPhoneCondition = false;
    }else if (letterSum==0 && signsSum >=1){
        phoneReq.innerHTML="No Signs"
        phoneInput.style.color = "red"
        e.target.style.borderColor = "red"
        phoneReq.style.display="block"
        phoneReq.style.color="red"
        filterPhoneCondition = false;
    }else if (letterSum>=1 && signsSum >=1){
        phoneReq.innerHTML="No Signs or letters"
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
    phoneInput.value=localStorage.getItem("phone")
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
    var sumAdress= letterSum + numSum
    if(sumAdress>=5 && signsSum ==0){
        e.target.style.backgroundColor = "" 
        adressInput.style.color = "black"
        e.target.style.borderColor = "black"
        adressReq.style.display="none"
        adressReq.style.color="black"
        filterAdressCondition = true;
    } else if (letterSum==0 ||  numSum==0 ||  signsSum >=1){ 
        adressInput.style.color = "red"
        e.target.style.borderColor = "red"
        adressReq.style.display="block"
        adressReq.style.color="red"
        filterAdressCondition = false; 
    } else {
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
    adressInput.value=localStorage.getItem("adress")
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
    } else if (letterSum==0 && numSum==0 && signsSum ==0){
        cityReq.innerHTML="City is requiere"
        cityInput.style.color = "red"
        e.target.style.borderColor = "red"
        cityReq.style.display="block"
        cityReq.style.color="red"
        filterCityCondition = false;
    }else if (letterSum<3 && numSum==0 && signsSum ==0){
        cityReq.innerHTML="More 3 characters"
        cityInput.style.color = "red"
        e.target.style.borderColor = "red"
        cityReq.style.display="block"
        cityReq.style.color="red"
        filterCityCondition = false;
    }else if (numSum>=1 && signsSum ==0){
        cityReq.innerHTML="No numbers"
        cityInput.style.color = "red"
        e.target.style.borderColor = "red"
        cityReq.style.display="block"
        cityReq.style.color="red"
        filterCityCondition = false;
    }else if (numSum==0 && signsSum >=1){
        cityReq.innerHTML="No signs"
        cityInput.style.color = "red"
        e.target.style.borderColor = "red"
        cityReq.style.display="block"
        cityReq.style.color="red"
        filterCityCondition = false;
    }else if (numSum>=1 && signsSum >=1){
        cityReq.innerHTML="No signs or numbers"
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
    cityInput.value=localStorage.getItem("city")
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
    postalInput.value=localStorage.getItem("postal")
   
})  

inputEmail.addEventListener("blur", (e)=>{
    var emailValid=/[a-z0-9]+@[a-z]+\.[a-z]{2,3}/
        if(emailValid.test(e.target.value)){
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
    
})
inputEmail.addEventListener("focus", (e)=>{
    e.target.style.backgroundColor = "" 
    e.target.style.borderColor = "black"
    inputEmail.style.color="black"
    errorEmail.style.display="none"
    inputEmail.value=localStorage.getItem("email")
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
    inputPassword.value=localStorage.getItem("password")
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
    inputPasswordRepeat.value=localStorage.getItem("passwordRepeat")
})
buttonCreate.addEventListener('click', getData)

function getData(e){
    var url='https://basp-m2022-api-rest-server.herokuapp.com/signup'
    url=url + "?name=" + nameInput.value + "&lastName=" + lastNameInput.value + "&dni=" + dni.value + "&dob=" + dateInput.value + "&phone=" + phoneInput.value
    + "&adress=" + adressInput.value + "&city=" + cityInput.value + "&zip=" + postalInput.value + "&email=" + inputEmail.value + "&password=" + inputPassword.value
    e.preventDefault()
    modal.style.display="block"
    var listUl = document.getElementById("listUl")
    if(inputEmail.value == "" || inputPasswordRepeat == "" || nameCondition==false || lastNameCondition == false || filterEmailCondition == false || dniCondition == false || filterPhoneCondition == false 
        || filterAdressCondition == false || filterCityCondition == false || postalCondition == false || filterPassCondition == false || filterPassRCondition == false 
        || filterDateCondition==false){
        
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(res){
            alert(res.errors[0].msg)
            modalh2.innerHTML=res.errors[0].msg
            listUl.style.display="none"
        })
      
    }else{
        fetch(url)
        .then(function(response){
            return response.json()
        })
        .then(function(res){
            alert(`Name: ${nameInput.value}`+
            `Last name: ${lastNameInput.value}`+
            `Birthday: ${dateInput.value}`+
            `Dni: ${dni.value}`+
            `Phone: ${phoneInput.value}`+
            `Adress: ${adressInput.value}`+
            `City: ${cityInput.value}`+
            `Postal: ${postalInput.value}`+
            `Email: ${inputEmail.value}`+
            `Password: ${inputPassword.value}`)
            modalh2.innerHTML="Your data:"
            listUl.style.display="block"
            ul1.innerHTML=`Name: ${nameInput.value}`
            ul2.innerHTML=`Last name: ${lastNameInput.value}`
            ul3.innerHTML=`Birthday: ${dateInput.value}`
            ul4.innerHTML=`Dni: ${dni.value}`
            ul5.innerHTML=`Phone: ${phoneInput.value}`
            ul6.innerHTML=`Adress: ${adressInput.value}`
            ul7.innerHTML=`City: ${cityInput.value}`
            ul8.innerHTML=`Postal: ${postalInput.value}`
            ul9.innerHTML=`Email: ${inputEmail.value}`
            ul10.innerHTML=`Password: ${inputPassword.value}`

        })
        localStorage.setItem("name", nameInput.value)
        localStorage.setItem("lastName", lastNameInput.value)
        localStorage.setItem("Birthday", dateInput.value)
        localStorage.setItem("DNI", dni.value)
        localStorage.setItem("phone", phoneInput.value)
        localStorage.setItem("adress", adressInput.value)
        localStorage.setItem("city", cityInput.value)
        localStorage.setItem("postal", postalInput.value)
        localStorage.setItem("email", inputEmail.value)
        localStorage.setItem("password", inputPassword.value)
        localStorage.setItem("passwordRepeat", inputPasswordRepeat.value)
    }
}

close.addEventListener("click", (e)=>{
    modal.style.display="none"
})

