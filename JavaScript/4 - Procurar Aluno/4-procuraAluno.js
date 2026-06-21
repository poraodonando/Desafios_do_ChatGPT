

//FUNÇÃO PROCURAR ALUNOS 

function procurarAluno(alunos, nome){

    
    let nomeEncontrado = nome
    for (const aluno of alunos) {
                    
        if(nomeEncontrado == aluno.nome){
            return  aluno
        }        
        
    }   

    return null
    

}

//FUNÇÃO ALUNO EXISTE

function alunoExiste(alunos, nome){

    for(const nome of alunos){

        if(alunos === nome){
            return true;
        }

    }

    return false;
}



const alunos = [
    { nome: "Ana", nota: 8 },
    { nome: "João", nota: 10 },
    { nome: "Maria", nota: 7 }
];

console.log(procurarAluno(alunos, "Ana"));
console.log(alunoExiste(alunos, "Ana"));