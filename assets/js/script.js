console.log("JavaScript carregado com sucesso!");


const nomeCurso = "Desenvolvimento de Interfaces Web";

console.log(nomeCurso);


const ehProfessor = false;
const ehAluno = true;
const possuiAcesso =
    ehProfessor || ehAluno;

console.log(possuiAcesso);

const nota = 70;
const frequencia = 80;
if (nota >= 60 && frequencia >= 75) {
    console.log("Aluno aprovado");
} else {
    console.log("Aluno não aprovado");
}

console.log("Informação");
console.warn("Atenção");
console.error("Erro");