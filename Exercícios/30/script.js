onibus = {
    rodas: 8,
    limite_passageiros: 40,
    portas: 2
};

console.log(onibus);

onibus.janelas = 20;

delete onibus.rodas;
console.log(onibus.rodas)
console.log(onibus.janelas);
console.log(onibus)