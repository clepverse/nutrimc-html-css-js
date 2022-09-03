const botaoAlternar = document.querySelector('#toggle');

function AlternarTema() {
  document.body.classList.toggle('dark-theme');
}

function carregarTema() {
  const darkMode = localStorage.getItem('dark');

  if (darkMode) {
    AlternarTema();
  }
}

carregarTema();

botaoAlternar.addEventListener('change', () => {
  AlternarTema();

  document.body.classList.contains('dark-theme')
    ? localStorage.setItem('dark', 'on')
    : localStorage.removeItem('dark');
});
