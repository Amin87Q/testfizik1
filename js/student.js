const currentUser = JSON.parse(localStorage.getItem("currentUser"));

if (!currentUser || currentUser.role !== "student") {
    window.location.href = "index.html"; // اگر کاربر وارد نشده یا ادمین باشد، به صفحه ورود هدایت می‌شود
}

document.getElementById("question-form").addEventListener("submit", function (event) {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const title = document.getElementById("title").value;
    const topic = document.getElementById("topic").value;
    const description = document.getElementById("description").value;
    const imageFile = document.getElementById("image").files[0];

    let imageUrl = null;
    if (imageFile) {
        const reader = new FileReader();
        reader.onloadend = function () {
            imageUrl = reader.result;
            saveQuestion();
        };
        reader.readAsDataURL(imageFile);
    } else {
        saveQuestion();
    }

    function saveQuestion() {
        const question = {
            name,
            title,
            topic,
            description,
            date: new Date().toLocaleString(),
            imageUrl
        };

        let questions = JSON.parse(localStorage.getItem("questions")) || [];
        questions.push(question);
        localStorage.setItem("questions", JSON.stringify(questions));

        alert("سوال شما با موفقیت ارسال شد!");
        document.getElementById("question-form").reset();
    }
});
