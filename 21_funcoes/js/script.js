// Funções
/*
    * Funções são blocos de códigos reutilizaveis;
    * Ou seja, evitamos a repetição da logica de um programa em diversas partes do código;
    * A função precisa ser invocada para ser executada
*/

function primeiraFuncao(){

    console.log("Hello funções")

}
primeiraFuncao()

function dizerNome(nome) {
    console.log("O nome é " + nome)
}

dizerNome("Fabio");

function idade (idade) {
    console.log("Você tem " + idade + " anos" )
}

idade("23");
idade("17");
idade("34");

var nomeDoBancoDeDados = "João";

dizerNome(nomeDoBancoDeDados)


function soma(a, b){
    var soma = a + b;
    return a + b;
}

var somaUm = soma(2,5)

console.log(somaUm)

var somaDois = soma(5,5)
console.log(somaDois)

console.log(soma(4,5));