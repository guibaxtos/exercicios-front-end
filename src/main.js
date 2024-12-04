const alunos = [
    { nome: "João", nota: 7.5 },
    { nome: "Maria", nota: 5.0 },
    { nome: "Pedro", nota: 8.0 },
    { nome: "Ana", nota: 6.0 },
    { nome: "Carlos", nota: 4.5 }
];

const filtrarAprovados = (alunos) => {
    return alunos.filter(aluno => aluno.nota >= 6);
};

const alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);
