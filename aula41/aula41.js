// Escreva uma função que recebe 2 números e 
// retorne o maior deles
function random(min, max) {
  const r = Math.random() * (max - min) + min;
  return Math.floor(r);
}

const min = 1;
const max = 1;

const max1 = (x, y) => {
  if(x>y)return(`o valor ${x} e maior que ${y}`);
  if(y>x)return(`o valor ${y} e maior que ${x}`);
  return(`o valor ${x} e ${y} são iguais`);
};
console.log(max1(random(min,max), random(min,max)));

const max2 = (x, y) => x > y ? x : y;
console.log(max2(random(min,max),random(min,max)));

