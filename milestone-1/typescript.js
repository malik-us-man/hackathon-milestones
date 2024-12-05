var toggleButton = document.getElementById("toggle-skills");
var skills = document.getElementById("skills");
// Ensure skills section is initially displayed
if (skills.style.display === "") {
    skills.style.display = "block";
}
toggleButton.addEventListener("click", function () {
    if (skills.style.display === "none") {
        skills.style.display = "block";
        toggleButton.textContent = "Hide Skills"; // Update button text
    }
    else {
        skills.style.display = "none";
        toggleButton.textContent = "Show Skills"; // Update button text
    }
});
