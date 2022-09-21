// Também é possível declarar funções dentro de variáveis, desta maneira: const variavel = function() {}. Uma parte importante de funções são os parâmetros, que são similares variáveis que funcionam para colocar dados em funções, eles são declarados junto à declaração da função e quando a função for executada, os valores dos argumentos são colocados dentro dos parênteses.

// function expression
// function anonymous

// let total = 0

//parâmetros (paramenters)
// const sum = function (number1, number2) {
//     let total = number1 + number2
//     return total
// }

// let number1 = 34
// let number2 = 25
// sum(number1, number2) // argumentos - arguments

// console.log(`o numero 1 é ${number1}`)
// console.log(`o numero 2 é ${number2}`)
// console.log(`a soma é ${sum(number1, number2)}`)
// console.log(total)

//========================================================================

//função é um liquidificador    

function fazerSuco(fruta1, fruta2) {
    return 'suco de : ' + fruta1 + fruta2
}

const copo = fazerSuco('laranja', 'maçã')

console.log(copo)

