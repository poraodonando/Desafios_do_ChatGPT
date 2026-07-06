const produtos = [
   { nome: "Notebook", preco: 3000 },
   { nome: "Mouse", preco: 150 },
   { nome: "Teclado", preco: 250 },
   { nome: "Monitor", preco: 1200 }
];


// [1,2,3].reduce(
//    (acc,n) => acc + n,
// 0)

function resumoCarrinho(produtos){

    
    let quantidade = produtos.length
    
    let totPreco = produtos.reduce((acc,produtos) => acc +produtos.preco,0)

    let mediaPreco = totPreco/quantidade

    res = {
        total: totPreco,
        quantidade: quantidade,
        mediaPreco: mediaPreco
    }
    return res


    
}


console.log(resumoCarrinho(produtos))


console.log("----------------------------")

const vendas = [
   { vendedor: "Ana", valor: 500 },
   { vendedor: "João", valor: 800 },
   { vendedor: "Ana", valor: 300 },
   { vendedor: "Carlos", valor: 1000 }
];


  


function totalPorVendas(vendas) {
    return vendas.reduce((acc, venda) => {
        if (acc[venda.vendedor]) {
            acc[venda.vendedor] += venda.valor;
        } else {
            acc[venda.vendedor] = venda.valor;
        }

        return acc;
    }, {});
}

console.log(totalPorVendas(vendas))