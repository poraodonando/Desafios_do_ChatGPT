const alunos = [
    { nome: "Ana" },
    { nome: "João" },
    { nome: "Maria" }
];


   
    const nomeMaiusculo = alunos.map(maius => maius.nome.toUpperCase());
    
    return nomeMaiusculo
}

console.log(nomesMaiusculos(alunos))


console.log("------------------")

function apenasAprovados(alunosAp){

    const alunosAprovados = alunosAp.filter(aprovados => aprovados.nota >=7)
    return alunosAprovados

}

console.log(apenasAprovados(alunosAp))