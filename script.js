const button = document.getElementById("blessBtn");

const image = document.getElementById("hanuman");

button.addEventListener("click", () => {

image.classList.add("show");

button.innerHTML = "🙏 Jai Hanuman 🙏";

button.disabled = true;

});