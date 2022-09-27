// Operadores lógicos ||
/*
    * O operador lógico || é conhecido também como OR;
    * Ele retorna true caso uma das operações retorne verdadeiro;
    * O OR retorna false apenas se asduas expressões são falsas;
*/

var idade = 13;
var nome = "Fabio2";

if (nome == "Fabio" || idade > 14){
    console.log("Pode entrar na aula")
} else {
    console.log("Não pode entrar")
}

if ((nome = "larissa" || 15 > 20) && 10 == 10 ){
    console.log("Testando")
} else {
    console.log("Não entrou")
}

