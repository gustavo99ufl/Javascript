let idade = prompt('Digite sua idade: ');
let cnh = prompt('Você tem CNH? (sim/nao)? ');

if (cnh == 'sim') {

}

if (idade >= 18) {
    if (cnh == 'sim') {
        console.log('Você é maior de 18 e tem CNH!');
    } else if (cnh == 'nao') {
        console.log('Você é maior de 18 anos, mas não tem CNH!');
    } else {
        console.log('Você não tem CNH e nem tem 18 anos!');
    } 
} else {
    console.log('Você não tem 18 anos!')
}