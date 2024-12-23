function tipoNumber(number) {
    console.log(typeof(number));
    if (typeof number == 'string') {
        console.log('Esse dado é uma string!');
    } else if (typeof number == 'number') {
        console.log('Este dado é um number');
    } else if (typeof number == 'boolean') {
        console.log('Este dado é um boolean!')
    }
}

tipoNumber(55);
tipoNumber('cachorro');
tipoNumber((5 > 2));
tipoNumber(895);
tipoNumber('gato');
tipoNumber((6 < 1));

