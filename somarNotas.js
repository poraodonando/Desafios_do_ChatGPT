const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 10 },
    { nome: "Maria", nota: 7 }
];

function somarNotas(alunos){

    let = totNotas = 0
    let qtdAlunos = 0
    let mediaNotas = 0

    for (const aluno of alunos) {
        
        totNotas += aluno.nota
        qtdAlunos += 1
        
        
    }

    mediaNotas = totNotas/qtdAlunos


    return `O total de notas é: ${totNotas}. A média de alunos é ${mediaNotas}`

}

console.log(somarNotas(alunos))

function mediaNotas(alunos){

     let = totNotas = 0
    let qtdAlunos = 0
    let mediaNotas = 0

    for (const aluno of alunos) {
        
        totNotas += aluno.nota
        qtdAlunos += 1
        
        
    }

    mediaNotas = totNotas/qtdAlunos


    return mediaNotas.toFixed(2)

}

console.log(mediaNotas(alunos))