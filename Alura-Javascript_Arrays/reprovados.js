const nomes = ["Giu", "Ana", "Maria", "Joao"]
const notas = [8, 4.4, 9, 3]

const reprovados = nomes.filter( (_, indice) => notas
[indice] < 5)
console.log(`reprovados: ${reprovados}`)
