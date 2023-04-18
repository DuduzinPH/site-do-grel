var footer = document.getElementById('myFooter');

// função para verificar a posição do scroll e exibir ou ocultar o rodapé
function toggleFooter() {
  if ((window.innerHeight + window.pageYOffset) >= document.body.offsetHeight) {
    footer.style.display = 'block';
  } else {
    footer.style.display = 'none';
  }
}

// adiciona um listener para verificar a posição do scroll sempre que a página for rolada
window.addEventListener('scroll', toggleFooter);