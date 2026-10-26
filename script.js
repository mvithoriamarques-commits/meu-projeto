// Troque pelo número da oficina com código do país e DDD, só números.
// Exemplo: 5511999999999
const WHATSAPP_NUMBER = '5585991902453';

// Preencha com rua, número, bairro, cidade e estado para fixar o mapa.
const OFFICE_ADDRESS = 'Rua Gonas Barroso Braga, 111 - Centro, Uruburetama - CE, 62650-000';

if (OFFICE_ADDRESS.trim()) {
  const encodedAddress = encodeURIComponent(OFFICE_ADDRESS.trim());
  const map = document.querySelector('#office-map');
  map.src = `https://www.google.com/maps?q=${encodedAddress}&output=embed`;
  document.querySelector('#map-placeholder').hidden = true;
  document.querySelector('#location-address').textContent = OFFICE_ADDRESS;
  document.querySelector('.map-directions').href = `https://www.google.com/maps/dir/?api=1&destination=${encodedAddress}`;
} else {
  document.querySelector('.map-directions').addEventListener('click', (event) => event.preventDefault());
}

function whatsappUrl(message) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

document.querySelectorAll('.whatsapp-link, .whatsapp-float').forEach((link) => {
  link.href = whatsappUrl('Olá! Encontrei a Vértice pelo site e gostaria de falar com a equipe.');
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
});

document.querySelector('#quote-form').addEventListener('submit', (event) => {
  event.preventDefault();
  const data = new FormData(event.currentTarget);
  const message = [
    'Olá! Gostaria de solicitar um orçamento.',
    '',
    `Nome: ${data.get('nome')}`,
    `WhatsApp: ${data.get('telefone')}`,
    `Veículo: ${data.get('carro') || 'Não informado'}`,
    `Serviço: ${data.get('servico')}`,
    `Detalhes: ${data.get('mensagem') || 'Não informado'}`,
  ].join('\n');
  window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer');
});

const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav-links');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', String(open));
});
nav.querySelectorAll('a').forEach((link) => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));
