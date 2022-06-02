const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"82675659",
    email:"andre@email.com",
    fones:["73635273","625625688" ],
    dependentes: [{
     nome:"Rafa",
     parentesco:"prima",
     dataNasc:"20/02/2006"
  }]
}

cliente.dependentes.push({
    nome:"Lucas Vieira",
    parentesco:"primo",
    dataNasc:"04/01/2008"
})

// console.log(cliente)

const filhaMaisNova = cliente.dependentes.filter
(dependente => dependente.dataNasc==="02/01/2014")

console.log(filhaMaisNova)
     console.log(filhaMaisNova[0].nome)