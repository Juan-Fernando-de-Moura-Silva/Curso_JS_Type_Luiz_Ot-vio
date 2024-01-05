const salve = [];
let pessoa = {
  nome: "",
  peso: "",
  idade: "",
  altura: "",
};

function salvar() {
  let nomev = document.getElementById('nome').value;
  let idadev = parseInt(document.getElementById('idade').value);
  let pesov = parseFloat(document.getElementById('peso').value);
  let alturav = parseFloat(document.getElementById('altura').value);

  pessoa = {
    nome: nomev,
    peso: pesov,
    idade: idadev,
    altura: alturav,
  };

  salve.push(pessoa);

  document.getElementById('nome').value = "";
  document.getElementById('idade').value = "";
  document.getElementById('peso').value = "";
  document.getElementById('altura').value = "";

  console.log(salve);
  const list = document.getElementById('list');
  list.innerHTML = `<p>${pessoa.nome} ${pessoa.idade} ${pessoa.peso} ${pessoa.altura}</p>`;
  return salve;
}