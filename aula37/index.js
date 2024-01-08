const pessoa = {
  nome: 'Juan',
  sobrenome: 'Fernando'
};

// For clássico - Geralmente com iteráveis (array ou strings)
// For in - Retorna o índice ou chave (string, array ou objetos)
// For of - Retorna o valor em si (iteráveis, arrays ou strings)

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

for (let i in nomes) {
  console.log(nomes[i]);
}

for (let valor of nomes) {
  console.log(valor);
}

nomes.forEach(function(valor, indice, array) {
  console.log(valor, indice, array);
});
