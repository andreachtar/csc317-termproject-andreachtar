window.onload = function() {
    var form = document.getElementById("loginForm");

    form.onsubmit = function(e) {
        e.preventDefault();
        validateLoginForm();
    }
}

function validateLoginForm() {
    var username = document.getElementById("username").value;
    var password = document.getElementById("pwd").value;

    if (!validateUsername(username)) {
        alert("Invalid username. It must start with a letter and be 3 or more alphanumeric characters.");
        return false;
    }

    if (!validatePassword(password)) {
        alert("Invalid password. It must be 8 or more characters long, contain at least 1 upper case letter, 1 number, and 1 special character.");
        return false;
    }

    alert("Form submitted successfully!");
    return true;
}

function validateUsername(username) {
    var re = /^[a-zA-Z][a-zA-Z0-9]{2,}$/;
    return re.test(username);
}

function validatePassword(password) {
    var re = /^(?=.*[A-Z])(?=.*[0-9])(?=.*[/\*\-\+\!\@\#\$\^\&\~\[\]])\S{8,}$/;
    return re.test(password);
}
