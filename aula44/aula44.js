
function soma(x, y) {
  if (
    typeof x !== 'number' || 
    typeof y !== 'number'
  ) {
    throw new Error('x e y precisam ser números.');
  }

  return x + y;
}

try {
  console.log(soma('a', 2));// aparece a menssagem de erro.
  // console.log(soma('1', 2));// não aparece mensagm de erro.
} catch(error) {
  console.log(error);
  console.log('Alguma coisa mais amigável pro usuário.');
}

