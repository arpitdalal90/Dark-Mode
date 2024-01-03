const container = document.querySelector(".container");
const toggle = document.querySelector(".darkModeButton"); 

toggle.addEventListener("click", () => {
    container.classList.toggle("dark") ? (toggle.firstElementChild.className = "far fa-moon") : (toggle.firstElementChild.className = "fa-solid fa-sun");
});