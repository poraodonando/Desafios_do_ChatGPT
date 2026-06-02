
function AprovadosMaiores(alunos){

    aprovadosMaiores = 0;
    for (const aluno of alunos) {


        if(aluno.nota >= 7 && aluno.idade >= 18){
            aprovadosMaiores++
        }
        
    }

    return aprovadosMaiores

}


function listarAprovados(alunos){

    listaAprovados = []

    for (const aluno of alunos) {
        
        if(aluno.nota >= 7  && aluno.idade >= 18){
            listaAprovados.push(aluno.nome)
        }
    }

    return listaAprovados
}


const alunos = [
    { nome: "Ana", nota: 8, idade: 18 },
    { nome: "João", nota: 8, idade: 16 },
    { nome: "Maria", nota: 6, idade: 19 },
    { nome: "Pedro", nota: 9, idade: 20 }
];

console.log(AprovadosMaiores(alunos))
console.log(listarAprovados(alunos))