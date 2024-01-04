let varA = 'A'; // B
let varB = 'B'; // C
let varC = 'C'; // A

// criando uma variavel extra 

// let copyvar = varA;

// varA = varB
// varB = varC
// varC = copyvar

// sem criar uma variavel extra 

[varA, varB, varC] = [varB, varC, varA];

console.log(varA, varB, varC)