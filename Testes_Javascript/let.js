
var exibeMensagem = function() {
    if(true) { 
        const escopoFuncao = 'Caelum'; 
        let escopoBloco = 'Alura';

       console.log(escopoBloco); // Alura 
   } 
   console.log(escopoFuncao); // Caelum 
   console.log(escopoBloco); 
}

console.log(exibeMensagem(escopoFuncao))