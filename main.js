let alunos = [
    {nome: 'leo', nota: 10},
    {nome: 'gabriel', nota: 8},
    {nome: 'pedro', nota: 6},
    {nome: 'nicolas', nota: 4},
    {nome: 'caio', nota: 2},
    {nome: 'joao', nota: 0},
];

let aprovados = alunos.filter(function(aluno) {
    return aluno.nota >= 6;
});

console.log(aprovados);
