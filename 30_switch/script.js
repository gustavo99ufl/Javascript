let nome = 'Gustavo';

switch(nome) {
   case 'Gustavo':
      console.log('O nome é Gustavo');
      break;
   case 'João':
      console.log('O nome é João');
      break;
      default:
         console.log('O nome não foi encontrado');
         break;
}

if(nome == 'Gustavo') {
   console.log('O nome é Gustavo');
} else {
   console.log('O nome não foi encontrado');
}