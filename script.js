// NAV TOGGLE
const navToggle = document.getElementById('nav-toggle');
const nav = document.getElementById('nav');
const navLinks = document.querySelectorAll('.nav-link');

if (navToggle) {
  navToggle.addEventListener('click', () => nav.classList.toggle('show'));
}

// CLOSE NAV ON LINK CLICK
navLinks.forEach(link => link.addEventListener('click', () => nav.classList.remove('show')));

// ACTIVE LINK ON SCROLL
const sections = document.querySelectorAll('section[id]');
window.addEventListener('scroll', () => {
  const fromTop = window.scrollY + 120;
  sections.forEach(section => {
    const id = section.id;
    if (!id) return;
    const top = section.offsetTop;
    const height = section.offsetHeight;
    const link = document.querySelector('.nav-link[href="#' + id + '"]');
    if (!link) return;
    if (fromTop >= top && fromTop < top + height) {
      navLinks.forEach(l => l.classList.remove('active'));
      link.classList.add('active');
    }
  });
});

// BOOKING FORM (front-end demo)
const bookingForm = document.getElementById('booking-form');
const bookingMsg = document.getElementById('booking-msg');

if (bookingForm) {
  bookingForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const checkin = document.getElementById('checkin').value;
    const checkout = document.getElementById('checkout').value;
    if (!checkin || !checkout || (new Date(checkout) <= new Date(checkin))) {
      bookingMsg.textContent = 'Please provide valid check-in and check-out dates.';
      bookingMsg.style.color = '#ef4444';
      return;
    }
    bookingMsg.textContent = 'Rooms available! Our reservations team will contact you (demo).';
    bookingMsg.style.color = '#059669';
    bookingForm.reset();
  });
}

// CONTACT FORM (demo)
const contactForm = document.getElementById('contact-form');
const contactMsg = document.getElementById('contact-msg');

if (contactForm) {
  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    contactMsg.textContent = 'Thanks — we received your message (demo).';
    contactMsg.style.color = '#059669';
    contactForm.reset();
  });
}

// MODAL / LIGHTBOX
const modal = document.getElementById('modal');
const modalImg = document.getElementById('modal-img');
const modalTitle = document.getElementById('modal-title');
const modalClose = document.getElementById('modal-close');

document.querySelectorAll('.open-modal').forEach(btn => {
  btn.addEventListener('click', (e) => {
    // handle <img> elements and buttons
    const src = btn.dataset && btn.dataset.img ? btn.dataset.img : (btn.getAttribute('src') || '');
    const title = btn.dataset && btn.dataset.title ? btn.dataset.title : btn.alt || '';
    if (src) {
      modalImg.src = src;
      modalTitle.textContent = title || '';
      modal.classList.add('show');
      modal.setAttribute('aria-hidden', 'false');
    }
  });
});

// close modal actions
if (modalClose) modalClose.addEventListener('click', () => closeModal());
modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });

function closeModal(){
  modal.classList.remove('show');
  modal.setAttribute('aria-hidden', 'true');
  modalImg.src = '';
  modalTitle.textContent = '';
}
