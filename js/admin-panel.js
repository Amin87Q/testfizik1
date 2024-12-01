document.addEventListener("DOMContentLoaded", function () {
    const currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (!currentUser || currentUser.role !== "admin") {
        window.location.href = "index.html"; // اگر کاربر ادمین نباشد، به صفحه ورود هدایت می‌شود
    }

    const adminContent = document.getElementById("admin-content");
    const questions = JSON.parse(localStorage.getItem("questions")) || [];

    if (questions.length === 0) {
        adminContent.innerHTML = "<p>در حال حاضر هیچ سوالی موجود نیست.</p>";
        return;
    }

    const questionList = document.createElement("ul");
    questionList.className = "question-list";

    questions.forEach((question, index) => {
        const listItem = document.createElement("li");
        listItem.className = "question-item";

        let imageHtml = '';
        if (question.imageUrl) {
            imageHtml = `<button class="view-image-button" data-index="${index}">نمایش عکس</button>
                         <div class="question-image-container" id="image-container-${index}" style="display: none;">
                            <img src="${question.imageUrl}" alt="Question Image" class="question-image" />
                         </div>`;
        }

        listItem.innerHTML = `
            <h3>${question.title}</h3>
            <p><strong>نام:</strong> ${question.name}</p>
            <p><strong>موضوع:</strong> ${question.topic}</p>
            <p><strong>توضیحات:</strong> ${question.description}</p>
            ${imageHtml}
            <p><small>تاریخ ارسال: ${question.date}</small></p>
            <button class="delete-button" onclick="deleteQuestion(${index})">حذف</button>
        `;
        questionList.appendChild(listItem);
    });

    adminContent.appendChild(questionList);
});

function deleteQuestion(index) {
    let questions = JSON.parse(localStorage.getItem("questions")) || [];
    questions.splice(index, 1);
    localStorage.setItem("questions", JSON.stringify(questions));
    window.location.reload();
}

document.addEventListener("click", function (event) {
    if (event.target && event.target.classList.contains("view-image-button")) {
        const index = event.target.getAttribute("data-index");
        const imageContainer = document.getElementById(`image-container-${index}`);
        imageContainer.style.display = imageContainer.style.display === "none" ? "block" : "none";
    }
});
