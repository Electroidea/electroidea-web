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
const emailQuote = document.getElementById('emailQuote');

function getQuoteData() {
  return {
    name: document.getElementById('qName').value.trim(),
    phone: document.getElementById('qPhone').value.trim(),
    city: document.getElementById('qCity').value.trim(),
    service: document.getElementById('qService').value,
    detail: document.getElementById('qMessage').value.trim()
  };
}

function quoteIsValid() {
  return quoteForm.reportValidity();
}

function buildQuoteMessage(data) {
  return `Hola Electroidea, quisiera solicitar una cotización.\n\nNombre: ${data.name}\nTeléfono: ${data.phone || 'No indicado'}\nComuna: ${data.city}\nServicio: ${data.service}\nDescripción: ${data.detail}`;
}

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


if (emailQuote && quoteForm) {
  emailQuote.addEventListener('click', () => {
    if (!quoteIsValid()) return;
    const data = getQuoteData();
    const subject = `Solicitud de cotización - ${data.service} - Electroidea`;
    const body = `Hola Electroidea, quisiera solicitar una cotización.

Nombre: ${data.name}
Teléfono: ${data.phone || 'No indicado'}
Comuna: ${data.city}
Servicio: ${data.service}
Descripción: ${data.detail}

Quedo atento/a a su respuesta. Muchas gracias.`;
    window.location.href = `mailto:contacto@electroidea.cl?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  });
}
