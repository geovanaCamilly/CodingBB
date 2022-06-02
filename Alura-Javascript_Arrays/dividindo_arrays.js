                //0       1
const nomes = ['Joao', 'Juliana', 'Ana', 'Caio', 'Lara', 'Marorjorie', 'Guilherme', 'Aline', 'Fabiana', 'Andre', 'Carlos', 'Paulo', 'Bia', 'Vivian', 'Isabela', 'Vinicius', 'Renan', 'Giulia', 'Luiz', 'Moises' ]

console.log("tamanho da array:", nomes.length)
                         //0, 10
const sala1 = nomes.slice(0,nomes.length/2)
                         //10
const sala2 = nomes.slice(nomes.length/2)

console.log(`Alunos da sala 1: ${sala1}`)
console.log(`Alunos da sala 2: ${sala2}`)
