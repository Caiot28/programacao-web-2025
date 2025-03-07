let a = 20;
let b = 4;
let x;
const operacoes = ["adição", "subtração", "multiplicação", "divisão"];

function imprimirResultado(a, b, x, operador){
    console.log(`Resultado da ${operador} entre ${a} e ${b} = ${x}`);
}

/*
x = a + b;
imprimirResultado(a, b, x, operacoes[0]);

x = a - b;
imprimirResultado(a, b, x, operacoes[1]);

x = a * b;
imprimirResultado(a, b, x, operacoes[2]);

x = a / b;
imprimirResultado(a, b, x, operacoes[3]);
*/

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

function imprimirMatriz(A){

    for(let i = 0; i < A.length; i++){
        let linhaMatriz = "";
        for(let j = 0; j < A[i].length; j++){
            linhaMatriz += A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }
}

//imprimirMatriz(matriz);

let capitais = {
    DF: "Brasília",
    DDD_DF: 61,
    SP: "São Paulo",
    DDD_SP: 11,
    RJ: "Rio de Janeiro",
    DDD_RJ: 21,
}

for (const key in capitais) {
    //console.log(key + " - " + capitais[key]);
}

function verificaPar(n){
    if(n % 2 == 0)
        return true
    
    return false;
}

let n = 3;
console.log(verificaPar(n));