let pecas = ['bomba dágua', ' tensores', ' correia dentada', ' pastilhas', ' sapatas', ' bobinas', ' cabos de vela'];

function atualizarColecaoAutoPecas(pecas, peca){ //pecas & peca se referem a palavra 'peças/peça'.

    if (pecas.indexOf(peca) === -1) {

        pecas.push(peca);
        
        console.log('Um novo produto foi adiconado na lista, verifique a atualização: ' + pecas);

    } else if (pecas.indexOf(peca) > -1) {

        console.log(`${peca}, é um item que já existe na coleção de peças`)

    }  
    
}

atualizarColecaoAutoPecas(pecas, ' Sinto de segurança');

console.log(atualizarColecaoAutoPecas);