// Estruturas de Repetição
/*
    * Estas estruturas servem para repetir n vezes uma operação;
    * Por exemplo: repetir uma dterminada lógica em cada elemento de um array;
    * As estruturas mais comuns são: while e for;
    * OBS: tomar cuidadocom o loop infinito;



Estrutura while

    * O while é a estrutura de repetição mais simples do JavaScript;
    * A ideia é que se repita algo até atingir tal condição;
    * While -> Enquanto;
*/

var x = 0;

while(x < 5){
    console.log("Testando repetição " + x);

    // incrementador
    x++;
} 

// var arr =['F', 'a', 'b', 'i','o'];
// var y = 0;

// while(y < arr.length) {
//     console.log(arr[y]);

//     y++;
// }

var arr = ['teste', 'testando', 'a', 'b'];
var y = 0;

while(y <= 3){
    console.log(arr[y]);

    y++;
}

var palavra = "Fabio";
var i = 0;

while(i < 5) {
    console.log(palavra[i]);

    i+= 1;
}