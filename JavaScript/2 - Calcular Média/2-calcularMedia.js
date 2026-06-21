

function calcularMedia(arrayNotas){

    let soma = 0

    for (const nota  of arrayNotas) {
        
        soma +=  nota;


    }

    let tamanho = arrayNotas.length
    let media = soma/tamanho;
    return media
}

notas = [3,6,2,5]
console.log(calcularMedia(notas))