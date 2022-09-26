// Tipo de dados: Arrays

/*
    * Na verdade os arrays são considerados objetos em JavaScript, porém servem como listas;
    * Podemos ter itens de qualquer tipo de dado também;
    * Porém não por chave e valor, e sim por índice;
*/

// var arr = [];  <= exemplo de array
// var obj = {};  <= exemplo de objeto

var arr = [5, "Fabio",  true, {teste: 1, teste:2}];

console.log(arr)

var arr2 = [2,3,4,5,6];

console.log(arr2)
console.log(arr[0])

arr[4] = 10;

arr[0] = "teste"

console.log(arr)

