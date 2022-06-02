const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"82675659",
    email:"andre@email.com"
}

cliente.dependentes = {
    nome:"Rafa",
    parentesco:"prime",
    dataNasc:"20/02/2006"
}

console.log(cliente)

cliente.dependentes.nome = "Rafa Lira"

console.log(cliente)
