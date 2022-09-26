// Condicional: else e else if
/*
    * Caso a instrução de if seja negativa, podemos adicionar else;
    * Que será a outra condicional a ser executada;
    * Podemos então criar uma bifurcação no código;
    * Já o else if em a possibilidade de fazer outra verificação e adicionar mais um bloco de código;
*/

// Pode colocar quantos else if quiser

var nome = "Fabio"

if(nome == "Pedro"){
    console.log("O nome dele é pedro")
} else if (nome == "Fabio") {
    console.log("O nome dele é Fabio")
} else {
    console.log("O nome dele não é pedro e nem fabio")
}


var idade = 18

if (idade >= 18) {
    console.log("Pode entrar na festa")
} else if(idade == 17) {
    console.log("Ele pode entrar com autorização")
} else {
    console.log("Ele não pode entrar na festa")
}