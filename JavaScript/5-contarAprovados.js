
function contarAprovados(alunos){
    
    let aprovados = 0
    for (const aluno of alunos) {
        
        if(aluno.nota >= 7){
            aprovados++
        }      

    }
    return aprovados
}

function listarAprovados(alunos){

    let aprovados = []

    for (const aluno of alunos) {
        

        if(aluno.nota >= 7){
            aprovados.push(aluno.nome)
        }
    }

    return aprovados

}


const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 5 },
    { nome: "Maria", nota: 7 },
    { nome: "Pedro", nota: 4 }
];

console.log(contarAprovados(alunos))
console.log(listarAprovados(alunos))