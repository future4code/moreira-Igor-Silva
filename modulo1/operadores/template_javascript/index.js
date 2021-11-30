// Exercícios de interpretação de código

    //Ex.01

const bool1 = true
const bool2 = false
const bool3 = !bool2

let resultado = bool1 && bool2
console.log("a.", resultado)     // false

resultado = bool1 && bool2 && bool3
console.log("b.", resultado)    // false

resultado = !resultado && (bool1 || bool2) 
console.log("c. ", resultado)   // true

console.log("d. ", typeof resultado)    // boolean


    //Ex.02

// Faltou configurar o prompt para essa função!

const primeiroNumero = Number(prompt("Digite um numero!")) 
const segundoNumero = Number(prompt("Digite outro numero!"))

const soma = primeiroNumero + segundoNumero
console.log("Soma =", soma)

    //Ex.03

// antes do prompt, pode-se acrescentar o sinal de "+"
// ou adicionar "Number" separando o prompt em parenteses:
    // const primeiroNumero = +prompt("Digite um número!")
    // const primeiroNumero = Number(prompt("Digite um número"))




    // Exercícios de escrita de código

    //Ex. 01

    const idadeUsuario = Number(prompt("Digite sua idade:"))
    console.log("Sua idade:", idadeUsuario)

    const idadeAmigo = Number(prompt("Qual a idade do seu melhor amigo?"))
    console.log("Idade do seu amigo:", idadeAmigo)

    console.log("Sua idade é maior do que a do seu melhor amigo?")
    console.log(idadeUsuario > idadeAmigo)
    console.log("Diferença de idade:", idadeUsuario - idadeAmigo, "anos.")

    //Ex. 02

    const 




