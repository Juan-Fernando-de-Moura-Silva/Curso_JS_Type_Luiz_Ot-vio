function Saudacao() {
  console.log("Bom dia!!!")
}

Saudacao();

function Saudacao1(nome) {
  return (`Bom dia, ${nome}!!!`)
}

const retorno =Saudacao1("Juan");

console.log(retorno)

function soma(x,y){
  return (x+y);
}

console.log(soma(2,2));
console.log(soma(4,2));
console.log(soma(6,2));

const raiz = function(numero){
  return (numero ** 0.5)
}

console.log(raiz(9));
console.log(raiz(25));

// arrow function
const potencia  = (numero)=>{
  return(numero ** 2)
}

console.log(potencia(3));
console.log(potencia(5));


