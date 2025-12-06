// Wait until HTML loads
document.addEventListener("DOMContentLoaded", () => {
    const emailInput = document.getElementById("email");
    const passwordInput = document.getElementById("password");
    const errorMsg = document.getElementById("errorMsg");
    const loginBtn = document.getElementById("loginBtn");

    loginBtn.addEventListener("click", () => {
        const email = emailInput.value.trim();
        const password = passwordInput.value.trim();

        // Basic validation
        if (!email.includes("@") || email.length < 5) {
            errorMsg.innerText = "Please enter a valid email.";
            return;
        }

        if (password.length < 4) {
            errorMsg.innerText = "Password must be at least 4 characters.";
            return;
        }

        errorMsg.innerText = "";
        alert("Login successful!");
    });
});