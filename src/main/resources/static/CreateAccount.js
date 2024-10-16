function checkPassword() {
    var first_password = document.getElementById("first_password").value;
    var second_password = document.getElementById("second_password").value;
    var errorMessage = document.getElementById("error-message");

    if (first_password !== second_password) {
        errorMessage.style.display = "block";
        return false;
    } else {
        errorMessage.style.display = "none";
        return true;
    }
}