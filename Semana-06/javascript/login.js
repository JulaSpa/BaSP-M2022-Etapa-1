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

console.log(inputEmail)
console.log(inputPassword)
console.log(button)
console.log(emailText)

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


var chars = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","0","1","2","3","4","5","6","7","8","9"];



inputPassword.addEventListener("keyup",filter)
inputPassword.addEventListener("blur",filter)

function filter(e){
    var text = e.target.value
    
    //console.log(text)
    
    //console.log(chars)
    var errorPassword = document.getElementById("errorPassword")
    for(i=0;i<text.length;i++){
        var pass= Array.from(text[i])
        console.log(pass)
    
         for(let i=0;i<chars.length;i++){
            const letter=chars[i]

            console.log(letter)
            
            if(letter.toLocaleLowerCase().indexOf(pass)!=-1){
                e.target.style.backgroundColor = "" 
                passwordText.style.color = "black"
                e.target.style.borderColor = "black"
                inputPassword.style.color="black"
                errorPassword.style.display="none"
                console.log("si")
               break
               
            } else{
                passwordText.style.color = "red"
                e.target.style.borderColor = "red"
                inputPassword.style.color="red"
                console.log("no")
                errorPassword.style.display="block"
                
            }
            
        } 

       
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
   

    if(inputEmail.value=="" || inputPassword.value=="" || inputEmail.value.includes(validE)==false){
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
        liEmail.style.display="none"
        lipass.style.display="none"
        

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

close.addEventListener("click",(out)=>{
    modal.style.display="none"
})
