"use strict";

var alunos = [{
  nome: "João",
  nota: 7.5
}, {
  nome: "Maria",
  nota: 5.0
}, {
  nome: "Pedro",
  nota: 8.0
}, {
  nome: "Ana",
  nota: 6.0
}, {
  nome: "Carlos",
  nota: 4.5
}];
var filtrarAprovados = function filtrarAprovados(alunos) {
  return alunos.filter(function (aluno) {
    return aluno.nota >= 6;
  });
};
var alunosAprovados = filtrarAprovados(alunos);
console.log(alunosAprovados);