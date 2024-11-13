// Example JavaScript functionality to show project details in a popup
function viewProjectDetails(projectName) {
    alert('More details about ' + projectName);
}

// Form submission (just for demo, no real backend)
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;

    alert(`Message sent!\n\nName: ${name}\nEmail: ${email}\nMessage: ${message}`);
});
