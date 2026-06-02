
function melhorAluno(alunos){

    
    let melhorAluno = alunos[0]
    
    for (const aluno of alunos) {
        
        
        if(aluno.nota > melhorAluno.nota){
            melhorAluno = aluno
        }
    
        
    }

    return melhorAluno
}

const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 10 },
    { nome: "Maria", nota: 7 }
];

console.log(melhorAluno(alunos))