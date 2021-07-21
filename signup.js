
function tosignup() {
    
    window.location.href = 'signup.html'
    console.log(true);
}


function tologin() {
    
    window.location.href = 'login.html'
    console.log(true);
}

function tohome() {
    window.location.href = 'home.html'
    console.log(true);

}
var obj = []
function getForm() {

    var form = document.getElementById("signupform");

    let name = form.name.value;

    let number = form.number.value;

    let email = form.email.value;

    let password = form.password.value;

    if (name.length == 0 || number.length == 0 || email.length == 0 || password.length == 0) {
        alert("Please Enter all Fields");
    }
    else {

    
    
        let userData = {
            name,
            number,
            email,
            password,
        };

        let myArray;

        myArray = localStorage.getItem("userData")

        if (myArray == null) {
            myArray = [];
        }
        else {
            myArray = JSON.parse(localStorage.getItem("userData"))
        }
 
        myArray.push(userData);

        localStorage.setItem("userData", JSON.stringify(myArray));

        window.location.href = "login.html"
        
    }

}