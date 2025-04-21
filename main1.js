function validateForm(event) {
    event.preventDefault(); // Prevent form submission

    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirm-password").value;
    let errorMessage = "";

    // Name validation - only alphabets and at least 6 letters
    let namePattern = /^[A-Za-z]+$/;
    if (!namePattern.test(name) || name.length < 6) {
        errorMessage += "Name must contain only alphabetical characters and be at least 6 letters long.\n";
    }

    // Email validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email)) {
        errorMessage += "Enter a valid email address.\n";
    }

    // Password validation
    if (password.length < 6) {
        errorMessage += "Password must be at least 6 characters long.\n";
    }

    // Confirm password validation
    if (password !== confirmPassword) {
        errorMessage += "Passwords do not match.\n";
    }

    if (errorMessage) {
        alert(errorMessage);
        return false;
    }

    alert("Registration successful!");
    return true;
}

// Attach validation function to form submission
document.addEventListener("DOMContentLoaded", function () {
    document.querySelector("button[type='submit']").addEventListener("click", function (event) {
        validateForm(event);
    });
});