// Tipo de dados: Objetos

/*
    * Funcionam como um array associativo e outras linguagens;
    * Podemos criar propriedades com chave e valor 
    * A ideia é guardar um conjunto de valores oara utilizar posteriomente;
*/

var obj = {
    nome: "Fabio",
    idade: 23,
    profissao: "programador",
    estaTrabalhando: true
}

    console.log(obj)
    console.log(typeof obj)

    console.log(obj.nome)
    console.log(obj.idade)
    console.log(obj.profissao)

    console.log(`O meu nome é ${obj.nome} e tenho ${obj.idade} anos `)
    
    obj.nome = "Lucas"

    console.log(obj.nome)
    console.log(obj)

    obj.graduacao = true
    
    console.log(obj)