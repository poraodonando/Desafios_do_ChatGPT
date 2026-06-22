
const filmes = [
    { titulo: "Matrix", nota: 9 },
    { titulo: "Avatar", nota: 8 },
    { titulo: "Interestelar", nota: 10 },
    { titulo: "Batman", nota: 7 }
];

function filmesMaisAvaliados(filmes){
    
    
    filmeMAvaliado = filmes[0].nota
    melhorFilme = filmes[0];
    
    for (const filme of filmes) {
        
        if(filme.nota > filmeMAvaliado){
            melhorFilme = filme
            filmeMAvaliado = filme.nota
        }
    }
    return melhorFilme
    
    return null
}

console.log(filmesMaisAvaliados(filmes))

// filmeMAvaliado = filmes.filter(maisA => maisA.nota)

function filmesAcimaDe(filmes,nota){
    
    AcimaDe = filmes.filter(Acima => Acima.nota > nota)

    return AcimaDe
}


console.log("==============")
console.log(filmesAcimaDe(filmes,8))