const elementos = [
  {tag: 'p', texto: 'Qualquer texto que você quiser.'},
  {tag: 'div', texto: 'A 2° frase sera adicionada em uma DIV'},
  {tag: 'section', texto: 'A 3° frase sera adicionada em uma section'},
  {tag: 'footer', texto: 'A 4° frase sera adicionada em um footer'},
];

const container = document.querySelector('.container');
const div = document.createElement('div');

for (let i = 0; i < elementos.length; i++) {
  let { tag, texto } = elementos[i];
  let tagCriada = document.createElement(tag);
  let textoCriado = document.createTextNode(texto);

  tagCriada.appendChild(textoCriado);
  div.appendChild(tagCriada);
}

container.appendChild(div);