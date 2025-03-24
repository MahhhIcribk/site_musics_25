const hamburguer = document.getElementById('Burguer');
const navMenu = document.querySelector('.navbar-menu');

// Escutando ações de click
hamburguer.addEventListener('click', () => {
  hamburguer.classList.toggle('active');
  navMenu.classList.toggle('active');
});

document.querySelectorAll('.navbar-link').forEach((n) =>
  n.addEventListener('click', () => {
    hamburguer.classList.remove('active');
    navMenu.classList.remove('active');
  })
);

document.addEventListener('DOMContentLoaded', function () {
    const accessibilityButton = document.getElementById('accessibility-button');
    const accessibilityMenu = document.getElementById('accessibility-menu');
    const increaseFontButton = document.getElementById('increase-font');
    const decreaseFontButton = document.getElementById('decrease-font');
    const highContrastButton = document.getElementById('high-contrast');
    const resetAccessibilityButton = document.getElementById('reset-accessibility');
  
    // Função para alternar a visibilidade do menu de acessibilidade
    accessibilityButton.addEventListener('click', function () {
      accessibilityMenu.style.display = accessibilityMenu.style.display === 'flex' ? 'none' : 'flex';
    });
  
    // Função para aumentar a fonte
    increaseFontButton.addEventListener('click', function () {
      changeFontSize(1);
    });
  
    // Função para diminuir a fonte
    decreaseFontButton.addEventListener('click', function () {
      changeFontSize(-1);
    });
  
    // Função para alterar o contraste
    highContrastButton.addEventListener('click', function () {
      document.body.classList.toggle('high-contrast');
    });
  
    // Função para resetar as configurações de acessibilidade
    resetAccessibilityButton.addEventListener('click', function () {
      document.body.classList.remove('high-contrast');
      document.body.style.fontSize = '';
    });
  
    // Função para alterar o tamanho da fonte
    function changeFontSize(step) {
      const currentSize = parseFloat(window.getComputedStyle(document.body).fontSize);
      document.body.style.fontSize = `${currentSize + step}px`;
    }
  });