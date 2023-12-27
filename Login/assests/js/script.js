let alert = document.querySelector(".alertPlaceholder")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let passwordVisibilityControl = document.querySelector("#password-control")
let submit = document.querySelector("#loginBtn")

// A Code to show an alert to use
function setAlert(message, type) {
    var wrapper = document.createElement('div')
    wrapper.innerHTML = '<div class="alert alert-' + type + ' alert-dismissible" role="alert">' + message + '<button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button></div>'
    alert.append(wrapper)
    setTimeout(() => {
        alert.innerHTML = ""
    },3000);
}

// a code to control password visibility

passwordVisibilityControl.addEventListener("click" , function(e){
    e.preventDefault() ;
    if (password.type==="password") {
        password.type = "text"
        setAlert("Password is visible." , "danger")
    } else 
    {
        password.type = "password"
        setAlert("Password has been hidden." , "success")
    }
}) ;
// a code to auth a user
submit.addEventListener("click" , function(e) 
{
    e.preventDefault() ;
    if (email.value === "a@gmail.com" && password.value === "123" ) {
        setAlert("Welcome admin." , "success")
    } else {
        setAlert("Check your info" , "danger")
    }
});