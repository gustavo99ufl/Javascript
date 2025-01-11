let pessoa = {
    "nome": "Gustavo",
    "idade": 19,
    "profissao": "programador",
    "hobbies": ["programar", "ler", "jogar"]
}

let pessoaTexto = JSON.stringify(pessoa);

let pessoaJSON = JSON.parse(pessoaTexto);

console.log(pessoaTexto);

console.log(pessoaJSON);

console.log(pessoaJSON.hobbies[0]);
