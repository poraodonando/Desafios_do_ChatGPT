


function contarVogais(palavra){
    let totVogal = 0
    for(let i = 0; i < palavra.length; i++  ){
        

        let palavraM =  palavra.toLowerCase();
        let letra = palavraM[i];


        if("aeiou".includes(letra)){
            totVogal++
        }
    }


    return totVogal
}

console.log(contarVogais("abacaxi"));