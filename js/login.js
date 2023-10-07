let email=document.querySelector("#firstname")
let passward=document.querySelector("#passward")
let submit=document.querySelector("#submit")

let emailaddress= localStorage.getItem("firstname")
let getpassward= localStorage.getItem("passward")

submit.addEventListener("click" , function(e){
    e.preventDefault();
    if( email.value==="" || passward.value===""){
        alert("Please Fill Your Data")
    }
    else{
        if((emailaddress&&emailaddress.trim()===firstname.value.trim())&&(getpassward&&getpassward.trim()===passward.value.trim())){
            setTimeout(()=>{
                window.location="index.html"
            },1500)
        }
        else{
            alert("Username or Passward is Wrong")
        }
    }
    
})

    
