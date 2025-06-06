// 1. Зберегти дані про браузер у localStorage
const browserData = {
    platform: navigator.platform,
    userAgent: navigator.userAgent,
    language: navigator.language
};
localStorage.setItem("browserData", JSON.stringify(browserData));

// Вивести у футері
const info = JSON.parse(localStorage.getItem("browserData"));
document.getElementById("browser-info").innerHTML = `
    <p><strong>Платформа:</strong> ${info.platform}</p>
    <p><strong>Браузер:</strong> ${info.userAgent}</p>
    <p><strong>Мова:</strong> ${info.language}</p>
`;

// 2. Отримати коментарі (варіант 25)
fetch("https://jsonplaceholder.typicode.com/posts/25/comments")
    .then(res => res.json())
    .then(comments => {
        const container = document.getElementById("comments-container");
        container.innerHTML = "";
        comments.forEach(c => {
            const div = document.createElement("div");
            div.innerHTML = `<strong>${c.name}</strong> (${c.email}): <p>${c.body}</p>`;
            div.style.borderBottom = "1px solid #ccc";
            div.style.marginBottom = "10px";
            container.appendChild(div);
        });
    });

// 3. Модальне вікно після 1 хв
setTimeout(() => {
    document.getElementById("feedback-modal").style.display = "block";
}, 60000);

document.querySelector(".close-btn").onclick = () => {
    document.getElementById("feedback-modal").style.display = "none";
};

// 4. Перемикання теми
function applyTheme() {
    const hour = new Date().getHours();
    const isNight = hour < 7 || hour >= 21;
    document.body.classList.toggle("night", isNight);
    document.getElementById("theme-toggle").checked = isNight;
}
applyTheme();

document.getElementById("theme-toggle").addEventListener("change", (e) => {
    document.body.classList.toggle("night", e.target.checked);
});
