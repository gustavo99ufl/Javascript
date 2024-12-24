function checarTamanhoTexto(texto) {
    if (texto.length > 10) {
        console.log('Texto muito grande!');
    } else {
        console.log('Texto dentro do limite');
    }
}

checarTamanhoTexto('Gustavo');
checarTamanhoTexto('Testando se funciona');
checarTamanhoTexto('- que 10');