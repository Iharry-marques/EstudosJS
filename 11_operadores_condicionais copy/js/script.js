// Operadores de comparação
/*
    * São comummente utilizados para verificação nas estruturas de condição;
    * Temos os seguintes operadores: ==, !=, >, <, >=, <=
    * A partir de uma expressão de comparação podemos obter um true ou false;
*/

var idade = 17;
var possuiCarro = 0;
// o if entende o 0 como false


if (idade >= 18){
    console.log("O usuario pode fazer a CNH");
} 

if(idade <= 17 ){
    console.log("O usuario não pode fazer a CNH")
}

if(possuiCarro){
    console.log("O usuario ja pode andar de carro")
}

var nome = "Fabio"

if (nome == "Fabio"){
    console.log("O seu nome é Fabio")
}

if (nome != "Fabio"){
    console.log("O seu nome é Fabio")
}

if(20 > 10 ) {
    console.log("passou")
}
