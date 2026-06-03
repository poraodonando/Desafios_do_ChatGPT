


function produtoMaisCaro(produtos){

    let maisCaro = produtos[0]
    

    for (const produto of produtos) {
        
        if(produto.preco > maisCaro.preco){
            maisCaro = produto
        }
    }

    return maisCaro

}

function maisCaroAte(produtos , limite){

    let precoLim = produtos[0].preco
    let prodLim = {}

    for (const produto of produtos) {
        
        if(produto.preco <= limite){
            if(produto.preco >= precoLim){
                prodLim = produto
            }

            precoLim = produto.preco
        }    

    }

    return prodLim
}



const produtos = [
    { nome: "Mouse", preco: 50 },
    { nome: "Teclado", preco: 120 },
    { nome: "Monitor", preco: 900 },
    { nome: "Webcam", preco: 250 }
];

console.log(produtoMaisCaro(produtos))
console.log(maisCaroAte(produtos,200))