function subtracao(num) {
    while (num >= 0) {
        num -= 1;
        if (num % 2 == 0) {
            console.log('Esse número é par: ' + num);
        }
    }
}

subtracao(50)