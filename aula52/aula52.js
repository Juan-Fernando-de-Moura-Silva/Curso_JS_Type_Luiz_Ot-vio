const nome = 'Juan';

function falaNome() {
  console.log(nome);
}

function usaFalaNome() {
  const nome = 'Fernado';
  falaNome();
}
usaFalaNome();
