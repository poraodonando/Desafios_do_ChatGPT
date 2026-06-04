const { Profiler } = require("react");

const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 900 },
    { nome: "Webcam", preco: 250 },
    { nome: "Pc", preco: 500 }
];


function produtoMaisBarato(produtos) {

    maisBarato = produtos[0]

    for (const produto of produtos) {

        if (maisBarato.preco > produto.preco) {
            if(produto.preco >= minimo){

                maisBarato = produto
            }
        }
    }
    return maisBarato
}

console.log(produtoMaisBarato(produtos))

function produtoMaisBaratoAcima(produtos, minimo) {

    let maisBaratoAcima = null

    for (const produto of produtos) {        

        if (produto.preco >= minimo) {

            if (maisBaratoAcima === null || produto.preco < maisBaratoAcima.preco  ) { 

                maisBaratoAcima = produto
            }
        }
    }

    return maisBaratoAcima
}

console.log(produtoMaisBaratoAcima(produtos, 100))