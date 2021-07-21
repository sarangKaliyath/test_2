
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

let data = JSON.parse(localStorage.getItem("userData"));

function login() {

    let form = document.getElementById("loginForm")

    let username = form.username.value;
    console.log('username:', username)
    let password = form.password.value;
    console.log('password:', password)


    let nameArray = [];
    let passArray = [];
    for (var i = 0; i < data.length; i++) {
        
        nameArray.push(data[i].name);
        passArray.push(data[i].password);

    }
    var count = 0;
    for (var i = 0; i < nameArray.length; i++){



        if (nameArray[i] == username && passArray[i] == password) {
            window.location.href = 'home.html'
            break;
        }
        else if (nameArray[i] != username || passArray[i] != password) {
            count++;
        }
    }
    if (count == nameArray.length || passArray == passArray.length) {
        alert("Wrong Username or Password");
    }

}