

function criarCarteira(){
    
    let saldo = 0;
    

     function carteira(valor){
        saldo += valor
        return saldo
    }    
    

    return carteira
}

console.log(criarCarteira(200));
console.log(criarCarteira(500));


// Criar Contador

console.log("-------------------------")

function criarContador(){

    let valor = 0
    function contador(){
        valor++;
        return valor
    }

    return contador;

}

const contador = criarContador()
console.log(contador())
console.log(contador())
console.log(contador())