// IIFE -> Immediately invoked function expression
(function(idade, peso, altura) {
  const sobrenome = 'Fernando';

  function criaNome(nome) {
    return nome + ' ' + sobrenome;
  }

  function falaNome() {
    console.log(criaNome('Juan'));
  }

  falaNome();
  console.log(idade, peso, altura);

})(30, 80, 1.80);
