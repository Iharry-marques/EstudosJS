// Operadores lógicos 
/*
    * Nas linguagens de programação existem os operadores lógicos;
    * Estes operadores realizam comparações para que seja retornado um true ou false;
    * Decidindo então o fluxo da aplicação;
    * Utilizamos principalmente nas intruções de condição e repetoção, em conjunto dos operadores de comparação

Operador lógico &&

    * O Operador lógico && é conhecido também como AND;
    * Ele vai retornar true apenas se as duas expressões retornarem true;
    * Qualuqer outro resultado o operador lógico AND retornará false;

*/

var idade = 16;
var nome = "Fabio";

if(nome == "Fabio" && idade == 16) {
   console.log("O Fabio pode entrar na aula de espada") 
} else {
    console.log("este não é o Fabio")
}

if (1 == 1 && 3> 2 && true) {
    console.log("Passou")
}

if (1 == 1 && 3> 3 && true) {
    console.log("Passou")
}