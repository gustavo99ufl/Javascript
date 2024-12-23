let idade = prompt('Qual sua idade?');

function verAutoEscola(idade) {
    if (idade < 18) {
        console.log('Você não pode tirar CNH!');
    } else {
        console.log('Você pode tirar cnh!');
    }
}

verAutoEscola(idade)