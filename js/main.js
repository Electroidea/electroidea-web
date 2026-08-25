const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const open = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(open));
    toggle.textContent = open ? '✕' : '☰';
  });
  nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    nav.classList.remove('open');
    toggle.setAttribute('aria-expanded', 'false');
    toggle.textContent = '☰';
  }));
}

const quoteForm = document.getElementById('quoteForm');
if (quoteForm) {
  quoteForm.addEventListener('submit', (event) => {
    event.preventDefault();
    const name = document.getElementById('qName').value.trim();
    const phone = document.getElementById('qPhone').value.trim();
    const city = document.getElementById('qCity').value.trim();
    const service = document.getElementById('qService').value;
    const detail = document.getElementById('qMessage').value.trim();
    const message = `Hola Electroidea, quisiera solicitar una cotización.\n\nNombre: ${name}\nTeléfono: ${phone || 'No indicado'}\nComuna: ${city}\nServicio: ${service}\nDescripción: ${detail}`;
    window.open(`https://wa.me/56975491012?text=${encodeURIComponent(message)}`, '_blank', 'noopener');
  });
}
