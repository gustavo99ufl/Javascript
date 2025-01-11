n1 = [1, 4, 5, 3, 6, 8];
n2 = [7, 6, 4];

function VerificarNumElementos(arr) {
    if(arr.length >= 5) {
        console.log('Muitos elementos');
    } else {
        console.log('Poucos elementos');
    }
}

VerificarNumElementos(n1);
VerificarNumElementos(n2);