document.getElementById("admin-login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
        alert("ورود موفق!");
        // Store the user as logged in
        localStorage.setItem("currentUser", username);
        window.location.href = "admin-panel.html";
    } else {
        document.getElementById("error-message").style.display = "block";
    }
});
