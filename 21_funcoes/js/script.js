// Funções
/*
    * Funções são blocos de códigos reutilizaveis;
    * Ou seja, evitamos a repetição da logica de um programa em diversas partes do código;
    * A função precisa ser invocada para ser executada
*/

function primeiraFuncao() {

    console.log("Hello World das funções");

}

primeiraFuncao();

function dizerNome(nome) {
    console.log("O nome é: " + nome);
}

dizerNome("Fabio");
dizerNome("Pedro");
dizerNome("Silva");

var nomeDoBancoDeDados = "João"

dizerNome(nomeDoBancoDeDados)

function soma (a, b) {
    var soma = a + b;
    return soma;
}

var somaUm  = soma(2,5);

console.log(somaUm)

var somaDois = soma(5,5);

console.log(somaDois);

console.log(soma(4,5));



