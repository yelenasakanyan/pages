const password = document.getElementById("login-password");
const show = document.getElementById("login-show");
const password_error = document.getElementById("passwordError");
const password_created = document.getElementById("password_created");
const username = document.getElementById("login-username");
const username_error = document.getElementById("UsernameError");
const female = document.getElementById("login-gender-female");
const male = document.getElementById("login-gender-male");
const gender_error = document.getElementById("genderError");
const terms = document.getElementById("login-accept-terms");
const terms_error = document.getElementById("termsError");


show.addEventListener("mousedown", function () {
    password.setAttribute("type", "text");
})

show.addEventListener("mouseup", function () {
    password.setAttribute("type", "password");
})
show.addEventListener("mouseleave", function () {
    password.setAttribute("type", "password");
})

document.getElementById("login-form").addEventListener("submit", function (event) {
    usernameValidation();
    passwordValidation();
    gender_checked();
    terms_checked ();
    
    event.preventDefault();
})

let usernameValidation = function () {
    if (username.value == "") {
        username_error.innerHTML = "Fill yor username please!";
    }
    else {
        username_error.innerHTML = "";
    }
}


let passwordValidation = function () {
    if (password.value === "") {
        password_error.innerHTML = "Fill the password please!";
    }
    else if (password.value.length < 8) {
        password_error.innerHTML = "Password must be at least 8 characters long!";
    }
    else if (password.value.search(/[A-Z]/) < 0) {
        password_error.innerHTML = "Password must contain at least one uppercase letter!";
    }
    else if (password.value.search(/[a-z]/) < 0) {
        password_error.innerHTML = "Password must contain at least one lowercase letter!";
    }
    else if (password.value.search(/[0-9]/) < 0) {
        password_error.innerHTML = "Password must contain at least one number!";
    }
    else {
        password_error.innerHTML = ""
        created.innerHTML = "Your password created successfully";
    }
}


let gender_checked = function () {
    if (!female.checked || !male.checked) {
        gender_error.innerHTML = "You have not selected gender."
    }
    else{
        gender_error.innerHTML = "";
    }
}

let terms_checked = function () {
    if (!terms.checked) {
        terms_error.innerHTML = "You have not accepted terms."
    }
    else{
        terms_error.innerHTML = "";
    }
}