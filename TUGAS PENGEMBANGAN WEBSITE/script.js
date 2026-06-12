// ==========================================================
// NAVBAR: toggle menu mobile
// ==========================================================
const navToggle = document.getElementById('navToggle');
const navLinks = document.getElementById('navLinks');

navToggle.addEventListener('click', () => {
  navLinks.classList.toggle('open');
});

// Tutup menu saat link diklik (mobile)
navLinks.querySelectorAll('a').forEach(link => {
  link.addEventListener('click', () => {
    navLinks.classList.remove('open');
  });
});

// ==========================================================
// NAVBAR: efek shadow saat scroll
// ==========================================================
const navbar = document.getElementById('navbar');

window.addEventListener('scroll', () => {
  if (window.scrollY > 10) {
    navbar.style.boxShadow = '0 1px 0 rgba(26,26,46,0.06)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});

// ==========================================================
// FORM KONTAK: validasi sederhana + feedback (tanpa backend)
// ==========================================================
const contactForm = document.getElementById('contactForm');
const formNote = document.getElementById('formNote');

contactForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const message = document.getElementById('message').value.trim();

  if (!name || !email || !message) {
    formNote.textContent = 'Mohon lengkapi semua field sebelum mengirim.';
    formNote.style.color = '#e0524d';
    return;
  }

  // Simulasi pengiriman pesan (karena tidak ada backend)
  formNote.textContent = `Terima kasih, ${name}! Pesan Anda telah diterima.`;
  formNote.style.color = '#5B5FEF';
  contactForm.reset();
});

// ==========================================================
// ANIMASI: progress bar skill muncul saat di-scroll ke view
// ==========================================================
const bars = document.querySelectorAll('.bar-fill');

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const width = entry.target.style.width;
      entry.target.style.width = '0';
      requestAnimationFrame(() => {
        entry.target.style.transition = 'width 0.8s ease';
        entry.target.style.width = width;
      });
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.4 });

bars.forEach(bar => observer.observe(bar));
