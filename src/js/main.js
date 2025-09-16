import '../scss/style.scss';

// Phone mask function
function applyPhoneMask(value) {
  // Remove all non-numeric characters
  value = value.replace(/\D/g, '');

  // Apply mask (XX) XXXXX-XXXX
  if (value.length <= 2) {
    return value;
  } else if (value.length <= 7) {
    return `(${value.slice(0, 2)}) ${value.slice(2)}`;
  } else {
    return `(${value.slice(0, 2)}) ${value.slice(2, 7)}-${value.slice(7, 11)}`;
  }
}

// Form validation and WhatsApp integration
function sendToWhatsApp(event) {
  event.preventDefault();

  const name = document.getElementById('name').value;
  const phone = document.getElementById('phone').value;
  const email = document.getElementById('email').value;
  const origin = document.getElementById('origin').value;
  const destination = document.getElementById('destination').value;
  const service = document.getElementById('service').value;
  const date = document.getElementById('date').value;
  const details = document.getElementById('details').value;

  // Basic validation
  if (
    !name ||
    !phone ||
    !email ||
    !origin ||
    !destination ||
    !service ||
    !date
  ) {
    showFeedback('error', 'Por favor, preencha todos os campos obrigatórios.');
    return;
  }

  // Phone number validation (simple example, can be more robust)
  const phoneRegex = /^\(?[1-9]{2}\)? ?(?:[2-8]|9[1-9])[0-9]{3}\-?[0-9]{4}$/;
  if (!phoneRegex.test(phone)) {
    showFeedback(
      'error',
      'Por favor, insira um número de telefone válido (ex: (XX) XXXXX-XXXX).',
    );
    return;
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  if (!emailRegex.test(email)) {
    showFeedback('error', 'Por favor, insira um endereço de e-mail válido.');
    return;
  }

  const serviceNames = {
    'mudanca-residencial': 'Mudança Residencial',
    'mudanca-comercial': 'Mudança Comercial',
    'carreto-frete': 'Carreto e Frete',
    'mudanca-interestadual': 'Mudança Interestadual',
  };

  const message = `🚛 *NOVA SOLICITAÇÃO DE ORÇAMENTO* 🚛

📋 *DADOS DO CLIENTE*
👤 Nome: ${name}
📞 Telefone: ${phone}
📧 E-mail: ${email}

📋 *DETALHES DA MUDANÇA:*
📍 Origem: ${origin}
🏁 Destino: ${destination}

🚚 *SERVIÇO SOLICITADO*
📦 Tipo: ${serviceNames[service]}
🗓️ Data Preferencial: ${new Date(date).toLocaleDateString('pt-BR')}

${details ? `📝 *DETALHES ADICIONAIS*\n${details}\n\n` : ''}
Aguardo retorno com o orçamento. Obrigado!`;

  const whatsappNumber = '5511999999999'; // Substitua pelo número real
  const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
    message,
  )}`;

  window.open(whatsappURL, '_blank');

  showFeedback(
    'success',
    'Orçamento enviado com sucesso! Redirecionando para o WhatsApp...',
  );

  // Clear form after successful submission (optional)
  event.target.reset();
}

function showFeedback(type, message) {
  const feedbackElement = document.getElementById('formFeedback');
  feedbackElement.textContent = message;
  feedbackElement.className = `form-feedback ${type}`;
  feedbackElement.style.display = 'block';

  // Hide feedback after 5 seconds
  setTimeout(() => {
    feedbackElement.style.display = 'none';
  }, 5000);
}

// Mobile menu toggle
function toggleMenu() {
  const navMenu = document.querySelector('.nav-menu');
  navMenu.classList.toggle('active');
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', function () {
  // Apply phone mask to phone input
  const phoneInput = document.getElementById('phone');
  if (phoneInput) {
    phoneInput.addEventListener('input', function (e) {
      e.target.value = applyPhoneMask(e.target.value);
    });
  }

  // Smooth scrolling for navigation links
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start',
        });
      }
    });
  });

  // Make functions globally available
  window.sendToWhatsApp = sendToWhatsApp;
  window.toggleMenu = toggleMenu;
});
