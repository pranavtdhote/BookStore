document.addEventListener("DOMContentLoaded", function () {
    let loginButton = document.querySelector("button[type='submit']");
    
    if (loginButton) {
        loginButton.addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default form submission
            
            let email = document.getElementById("email").value.trim();
            let password = document.getElementById("password").value.trim();
            let errorMessage = "";

            // Email validation
            let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailPattern.test(email)) {
                errorMessage += "Enter a valid email address.\n";
            }

            // Password validation
            if (password.length < 6) {
                errorMessage += "Password must be at least 6 characters long.\n";
            }

            if (errorMessage) {
                alert(errorMessage);
            } else {
                alert("Login successful!");
            }
        });
    }
});
