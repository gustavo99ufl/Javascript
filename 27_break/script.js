let nome = 'Gustavo';

for (let i = 0; i <= 100; i = i + 10) {
   if(i == 30) {
      nome = 'João';
   }
   if(i == 50 && nome == 'João') {
   console.log('O nome é João, pode parar!');
   break;
}

console.log(i);
}
