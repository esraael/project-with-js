let firstname=document.querySelector("#firstname")
let lastname=document.querySelector("#lastname")
let email=document.querySelector("#email")
let passward=document.querySelector("#passward")
let submit=document.querySelector("#submit")


submit.addEventListener("click" , function(e){
    e.preventDefault();
    if(firstname.value==="" || lastname.value==="" || email.value==="" || passward.value===""){
        alert("Please Fill Your Data")
    }
    else{
        localStorage.setItem("firstname",firstname.value)
        localStorage.setItem("lastname",lastname.value)
        localStorage.setItem("email",email.value)
        localStorage.setItem("passward",passward.value)

        setTimeout(()=>{
            window.location="login.html"
        },1500)
    }
})

    

