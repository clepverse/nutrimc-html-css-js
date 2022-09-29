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

var activeLista = document.getElementById('a-lista');
var activeCalculadora = document.getElementById('a-calculadora');

activeLista.addEventListener('click', () => {
  activeLista.style.color = '#9f1239';
  activeCalculadora.style.color = '#475569';
});

activeCalculadora.addEventListener('click', () => {
  activeCalculadora.style.color = '#9f1239';
  activeLista.style.color = '#475569';
});

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
    resultado.style.color = '#713f12';
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

document.querySelector('#entrada-pesquisa').addEventListener('input', filtroLista);

function filtroLista() {
  const entradaPesquisa = document.querySelector('#entrada-pesquisa');
  const filter = entradaPesquisa.value.toLowerCase();

  const listaItems = document.querySelectorAll('.item-lista');

  listaItems.forEach((item) => {
    let text = item.textContent;

    if (text.toLowerCase().includes(filter.toLowerCase())) {
      item.style.display = '';
    } else {
      item.style.display = 'none';
    }
  });
}
