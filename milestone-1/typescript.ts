
const toggleButton = document.getElementById("toggle-skills") as HTMLButtonElement;
const skills = document.getElementById("skills") as HTMLElement;


if (skills.style.display === "") {
    skills.style.display = "block";
}

toggleButton.addEventListener("click", () => {
    if (skills.style.display === "none") {
        skills.style.display = "block";
        toggleButton.textContent = "Hide Skills";
    } else {
        skills.style.display = "none";
        toggleButton.textContent = "Show Skills"; 
    }
});

