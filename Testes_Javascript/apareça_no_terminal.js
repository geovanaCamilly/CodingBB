const listaRoupas = require("./lista-Roupas");

function mergeSort(listaRoupas) {

    if(listaRoupas.length > 1) {
        const parte1 = mergeSort(listaRoupas.slice(0, 1));
        const parte2 = mergeSort(listaRoupas.slice(2, 3));
        listaRoupas = ordena(parte1, parte2);            
    }

    return listaRoupas;
}

function ordena(parte1, parte2) {
    let posicaoAtualParte1 = 0
    let posicaoAtualParte2 = 0
    const resultado = []

    while (posicaoAtualParte1 < parte1.length && posicaoAtualParte2 < parte2.length) {
        let produtoAtualParte1 = parte1[posicaoAtualParte1]
             let produtoAtualParte2 = parte2[posicaoAtualParte2]

             if (produtoAtualParte1.preco < produtoAtualParte2.preco){
               resultado.push(produtoAtualParte1);
                 posicaoAtualParte1++
             } else {
                 resultado.push(produtoAtualParte2)
                 produtoAtualParte2++;
             
         

             return resultado.concat(posicaoAtualParte1 < parte1.length
                ? parte1.slice(posicaoAtualParte1)
                : parte2.slice(posicaoAtualParte2))
         }
     
     


console.log(mergeSort(listaRoupas));

    }
}


