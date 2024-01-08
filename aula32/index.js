// ... rest, ... spread
//                    0          1          2
//                 0  1  2    0  1  2    0  1  2
const numeros = [ [1, 2, 3], [4, 5, 6], [7, 8, 9] ];
const [lista1, lista2, lista3] = numeros;
console.log(lista3[2]);

const numero=[1000,2000,3000,4000,5000,6000,7000,8000,9000];
const [numero1, numero2, numero3, ...resto] = numero;
console.log(numero1, resto[1]);
