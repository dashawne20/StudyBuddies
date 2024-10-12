document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameField = document.querySelector("input[name='username']");
    const passwordField = document.querySelector("input[name='password']");

    form.addEventListener("submit", function (event) {
        // Reset the borders back to default before checking again
        usernameField.style.borderColor = "";
        passwordField.style.borderColor = "";

        let valid = true;
        let missingFields = [];

        // Check if the username field is empty
        if (usernameField.value.trim() === "") {
            usernameField.style.borderColor = "red";
            missingFields.push("Username");
            valid = false;
        }

        // Check if the password field is empty
        if (passwordField.value.trim() === "") {
            passwordField.style.borderColor = "red";
            missingFields.push("Password");
            valid = false;
        }

        // Borders of missing fields change to red before showing the alert
        if (!valid) {
            event.preventDefault();  // Prevent form submission
            setTimeout(function () {
                alert("Missing fields: " + missingFields.join(", "));
            }, 100); // Small delay to ensure visual change happens before alert
        }
    });

    // Add event listeners to reset border color when user starts typing
    usernameField.addEventListener("input", function () {
        if (usernameField.value.trim() !== "") {
            usernameField.style.borderColor = "";  // Reset border to original
        }
    });

    passwordField.addEventListener("input", function () {
        if (passwordField.value.trim() !== "") {
            passwordField.style.borderColor = "";  // Reset border to original
        }
    });
});