
const filmes = [
   { nome: "Matrix", nota: 8 },
   { nome: "Batman", nota: 9 },
   { nome: "Avatar", nota: 7 }
];

function somarNotas(filmes){

    let res = filmes.reduce((acc, n) => acc + n.nota,0 )
    
    return res;
    
}


console.log(somarNotas(filmes))

function mediaNotas(filmes){
    
    let res = filmes.reduce((acc,n) => acc + n.nota,0)
    let totFilmes = filmes.length;
    let media = res/totFilmes

    return media

}


console.log(mediaNotas(filmes))
