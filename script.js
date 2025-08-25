// Highlight active nav links
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("#nav-links .nav-link");

window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach((section) => {
    const sectionTop = section.offsetTop - 80;
    if (scrollY >= sectionTop) current = section.getAttribute("id");
  });
  navLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === `#${current}`) {
      link.classList.add("active");
    }
  });
});

// Scroll-to-top button
const scrollBtn = document.getElementById("scrollTopBtn");
window.onscroll = () => {
  scrollBtn.style.display = window.scrollY > 200 ? "block" : "none";
};
scrollBtn.onclick = () => window.scrollTo({ top: 0, behavior: "smooth" });

// Theme toggle
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("light");
  toggleBtn.textContent = document.body.classList.contains("light") ? "🌙" : "☀️";
});

// Typing effect
const typingText = ["Full Stack Developer", "UI/UX Designer", "Problem Solver"];
let typingIndex = 0, charIndex = 0;

function typeEffect() {
  if (charIndex < typingText[typingIndex].length) {
    document.getElementById("typing").textContent += typingText[typingIndex].charAt(charIndex);
    charIndex++;
    setTimeout(typeEffect, 120);
  } else {
    setTimeout(eraseEffect, 1500);
  }
}
function eraseEffect() {
  if (charIndex > 0) {
    document.getElementById("typing").textContent =
      typingText[typingIndex].substring(0, charIndex - 1);
    charIndex--;
    setTimeout(eraseEffect, 80);
  } else {
    typingIndex = (typingIndex + 1) % typingText.length;
    setTimeout(typeEffect, 200);
  }
}
document.addEventListener("DOMContentLoaded", typeEffect);

// Contact form validation
const form = document.querySelector("form");
form.addEventListener("submit", (e) => {
  e.preventDefault();
  const email = document.getElementById("inputEmail4").value;
  const password = document.getElementById("inputPassword4").value;
  if (!email || !password) {
    alert("Please fill out all required fields.");
  } else {
    alert("Message sent successfully!");
    form.reset();
  }
});

// Toggle password
const togglePassword = document.getElementById("togglePassword");
const passwordField = document.getElementById("inputPassword4");

togglePassword.addEventListener("click", () => {
  const type = passwordField.type === "password" ? "text" : "password";
  passwordField.type = type;
  togglePassword.textContent = type === "password" ? "Show" : "Hide";
});
function filterProjects() {
    // Get the search input value and convert to lowercase
    const input = document.getElementById('projectSearch');
    const filter = input.value.toLowerCase();
    
    // Get all project cards
    const projects = document.querySelectorAll('#skills .row .card');
    
    // Loop through each project card
    projects.forEach(project => {
        const title = project.querySelector('.card-title').textContent.toLowerCase();
        const description = project.querySelector('.card-text').textContent.toLowerCase();
        
        // Check if the title or description contains the search term
        if (title.includes(filter) || description.includes(filter)) {
            project.parentElement.style.display = ""; // Show the project's parent div
        } else {
            project.parentElement.style.display = "none"; // Hide the project's parent div
        }
    });
}
