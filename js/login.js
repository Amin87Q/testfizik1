document.getElementById("login-form").addEventListener("submit", function (event) {
    event.preventDefault();
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // لیست کاربران با دسترسی‌های متفاوت (ادمین و دانش‌آموز)
    const users = [
        { username: "admin", password: "admin123", role: "admin" },
        { username: "student1", password: "student123", role: "student" },
        { username: "student2", password: "student456", role: "student" }
    ];

    // جستجو برای پیدا کردن کاربر وارد شده
    const user = users.find(u => u.username === username && u.password === password);

    if (user) {
        // ذخیره اطلاعات کاربر در localStorage
        localStorage.setItem("currentUser", JSON.stringify(user));

        // هدایت به صفحه مناسب بر اساس نوع کاربر
        if (user.role === "admin") {
            window.location.href = "admin-panel.html"; // پنل ادمین
        } else {
            window.location.href = "student.html"; // صفحه دانش‌آموز
        }
    } else {
        // اگر نام کاربری یا کلمه عبور اشتباه باشد، پیام خطا نمایش داده می‌شود
        document.getElementById("error-message").style.display = "block";
    }
});
