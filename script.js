document.addEventListener("DOMContentLoaded", function () {
    // Handle login form validation
    let loginForm = document.querySelector("form[action*='login']");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value.trim();

            if (username === "" || password === "") {
                event.preventDefault();
                alert("Username and Password cannot be empty!");
            }
        });
    }

    // Handle register form validation
    let registerForm = document.querySelector("form[action*='register']");
    if (registerForm) {
        registerForm.addEventListener("submit", function (event) {
            let username = document.getElementById("username").value.trim();
            let password = document.getElementById("password").value;
            let confirmPassword = document.getElementById("confirm_password").value;

            if (username === "" || password === "" || confirmPassword === "") {
                event.preventDefault();
                alert("All fields are required!");
            } else if (password !== confirmPassword) {
                event.preventDefault();
                alert("Passwords do not match!");
            }
        });
    }

    // Handle feedback form submission (if applicable)
    let feedbackForm = document.querySelector("form[action*='submit_feedback']");
    if (feedbackForm) {
        feedbackForm.addEventListener("submit", function (event) {
            let feedback = document.getElementById("feedback").value.trim();

            if (feedback === "") {
                event.preventDefault();
                alert("Feedback cannot be empty!");
            }
        });
    }
});
