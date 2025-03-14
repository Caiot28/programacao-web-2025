function transporMatriz(A){
    console.log("Matriz original: ");
    for(let i = 0; i < A.length; i++){
        let linhaMatriz = "";
        for(let j = 0; j < A[i].length; j++){
            linhaMatriz += A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }

    console.log("Matriz transposta: ");
    for(let j = 0; j < A[0].length; j++){
        let linhaMatriz = "";
        for(let i = 0; i < A.length; i++){
            linhaMatriz += A[i][j] + "\t";
        }
        console.log(linhaMatriz);
    }
}

let A = [
    [1, 2],
    [3, 4],
    [5, 6]
]

transporMatriz(A);
