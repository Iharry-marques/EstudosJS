// Operadores lógicos !
/*
    * O operador lógico ! é conhecido também como NOT;
    * Este operador muda o valor que a expressão retornou;
    * Se recebeu true vira false, se recebeu false vira true;
*/

if (!false) {
    console.log("Passou")
}

var nome = "Fabio"

if(!(nome == "Joao")) {
    console.log("OK")
}