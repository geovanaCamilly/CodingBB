//                    0    1
const livros = require('./lista-livros');

function menorValor(arrProdutos, posicaoInicial) {

    let maisBarato = posicaoInicial;

for(let atual = 0; atual < arrProdutos.length; atual++) {
     if(arrProdutos[atual].preco < arrProdutos[maisBarato].preco) {
         maisBarato = atual
     }
 }
 return maisBarato;
}

console.log(livros)

module.exports = menorValor;    