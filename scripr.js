// Solicita que o usuário digite um número
let numero = Number(prompt("Digite um número: "))

// Verifica se o número é positivo, negativo ou zero
if (numero > 0)
    console.log("O número é positivo.")
if (numero < 0)
    if (numero % 2 == 0)
        console.log("O número é negativo e par.")
    else {
        console.log("O número é negativo.")  
    }
    else {
    console.log("O número é zero.")
}
    