document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // List of users with usernames and passwords
    const users = [
        { username: "student1", password: "password123" },
        { username: "student2", password: "password456" },
        { username: "student3", password: "password789" },
        { username: "student4", password: "password321" },
        { username: "student5", password: "password654" }
    ];

    // Find user by matching username and password
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // If user is found, store their username and login status
        localStorage.setItem("studentLoggedIn", "true");
        localStorage.setItem("studentUsername", user.username);

        alert("ورود موفق!");
        window.location.href = "student.html";  // Redirect to student page
    } else {
        // Show error if login is unsuccessful
        document.getElementById("error-message").style.display = "block";
    }
});
