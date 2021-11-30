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
    console.log("Diferença de idade:", idadeUsuario - idadeAmigo, "ano(s).")

    //Ex. 02

    const numPar = Number(prompt("Digite um número Par"))
    console.log("Numero é par?", numPar % 2 === 0)

    //Não consegui colocar para dividir por dois, apenas para ele imprmir
    //se o número inserido pelo usuário é falso ou verdadeiro.

    //Ex. 03

    const usuarioIdade = Number(prompt("Digite sua idade"))
      console.log("Você tem", usuarioIdade, "anos.")
      console.log("Você tem", usuarioIdade * 12, "meses")
      console.log("Você tem", usuarioIdade * 365, "dias")
      console.log("Você tem", usuarioIdade * 262.800, "horas")
 
//Ex. 04

const numeroUm = Number(prompt("Digite um número"))
const numerodois = Number(prompt("Digite outro número"))
    console.log(numeroUm >= numerodois) // true
    console.log(numeroUm === numerodois) // false
    console.log(numeroUm >= numerodois) // true
    console.log(numerodois <= numeroUm) // true



   





