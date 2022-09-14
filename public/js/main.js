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

function defaultForm(event) {
  event.preventDefault();
}

document.querySelector('.form1').addEventListener('click', defaultForm, false);

function alternarConteudo(form, lista) {
  // Esconde o form
  document.getElementById(form).style.display = 'block';

  // Esconde a lista
  document.getElementById(lista).style.display = 'none';
}

function calcular() {
  var imc;
  var resultado = document.getElementById('resultado');
  var altura = parseInt(document.getElementById('altura').value);
  var peso = parseInt(document.getElementById('peso').value);

  document.getElementById('altura-valor').textContent = altura + ' cm';
  document.getElementById('peso-valor').textContent = peso + ' kg';

  imc = (peso / ((altura * altura) / 10000)).toFixed(2);
  resultado.textContent = imc;

  if (imc < 18.5) {
    classificacao = 'Abaixo do peso';
    resultado.style.color = 'yellow';
  } else if (imc <= 24.9) {
    classificacao = 'Peso normal';
    resultado.style.color = 'green';
  } else if (imc <= 29.9) {
    classificacao = 'Acima do peso';
    resultado.style.color = 'orange';
  } else if (imc < 35) {
    classificacao = 'Obesidade Grau I';
    resultado.style.color = 'red';
  } else if (imc < 41) {
    classificacao = 'Obesidade Grau II';
    resultado.style.color = '#8B0000';
  } else {
    classificacao = 'Obesidade Grau III';
    resultado.style.color = 'black';
  }

  document.getElementById('classificacao').textContent = classificacao;
}
