let i = prompt('Digite um número para saber se é primo: ')

if (i > 1 && i % 2 !== 0 && i % 3 !== 0) {
    console.log('O número é primo!')
} else {
    console.log('O número não é primo!')
}