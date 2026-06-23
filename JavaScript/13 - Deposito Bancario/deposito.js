

const conta = {
   titular: "Fernando",
   saldo: 500
}


function depositar(conta, valor){

    conta.saldo += valor

    console.log(conta);
    
}


depositar(conta,500);



function sacar(conta, saque){

    if(conta.saldo >= saque){
        conta.saldo -= saque
    }else{
        return 'Saldo Insuficiente'
    }

    return conta
}

console.log(sacar(conta,1200))