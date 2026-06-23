

const jogadores = [
   { nome: "Carlos", gols: 5 },
   { nome: "Pedro", gols: 12 },
   { nome: "Ana", gols: 7 },
   { nome: "Julia", gols: 15 }
];



function artilheiros(jogadores){

    
    melhorArtilheiro = jogadores[0]
    for (const jogador of jogadores) {
        
        if(jogador.gols > melhorArtilheiro.gols){
            melhorArtilheiro = jogador
        }
    }

    return melhorArtilheiro

}


function bonsJogadores(jogadores){
    return jogadores.filter(j => j.gols >= 7)
}

console.log(artilheiros(jogadores))

console.log(bonsJogadores(jogadores))
