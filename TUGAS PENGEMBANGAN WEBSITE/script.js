// ================= MOBILE NAVBAR =================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

menuToggle.addEventListener("click", () => {
  navLinks.classList.toggle("active");
});

// Tutup menu setelah klik link

document.querySelectorAll(".nav-links a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
  });
});

// ================= NAVBAR SHADOW =================

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {

  if(window.scrollY > 10){
    navbar.style.boxShadow = "0 10px 30px rgba(0,0,0,0.05)";
  } else {
    navbar.style.boxShadow = "none";
  }

});

// ================= SKILL ANIMATION =================

const fills = document.querySelectorAll(".progress-fill");

const observer = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if(entry.isIntersecting){

      const fill = entry.target;
      const width = fill.dataset.width;

      fill.style.width = width;

      observer.unobserve(fill);
    }

  });

}, {
  threshold: 0.5
});

fills.forEach(fill => {
  observer.observe(fill);
});

// ================= CONTACT FORM =================

const contactForm = document.getElementById("contactForm");
const formMessage = document.getElementById("formMessage");

contactForm.addEventListener("submit", function(e){

  e.preventDefault();

  const name = document.getElementById("name").value;

  formMessage.textContent =
    `Terima kasih ${name}, pesan berhasil dikirim!`;

  contactForm.reset();

});

// ================= FADE ANIMATION =================

const fadeElements = document.querySelectorAll(
  ".section-title, .skill-card, .project-card, .about-image, .about-content, .contact-info, .contact-form"
);

const fadeObserver = new IntersectionObserver((entries) => {

  entries.forEach((entry) => {

    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }

  });

}, {
  threshold: 0.2
});

fadeElements.forEach((el) => {

  el.classList.add("fade-up");

  fadeObserver.observe(el);

});