const conta = (operador,...args) => {
  let acumulador = 0;
  if(operador==='+')for(let numeros of args){acumulador += numeros;}
  if(operador==='-')for(let numeros of args){acumulador -= numeros;}
  if(operador==='/')for(let numeros of args){acumulador /= numeros;}
  if(operador==='*')for(let numeros of args){acumulador *= numeros;}
  return(console.log(acumulador))
};
conta('/', 10, 20, 30, 40, 50);


