const cliente = {
    nome: "Andre",
    idade:36,
    cpf:"82675659",
    email:"andre@email.com",
    fones:["73635273","625625688" ],
    dependentes: [
    {   
     nome:"Rafa",
     parentesco:"prima",
     dataNasc:"20/02/2006" },
 {
    nome:"Lucas Vieira",
    parentesco:"primo",
    dataNasc:"04/01/2008"
     }
  ],
  saldo:100,
  depositar:function(valor)
  {
      this.saldo += valor
  }
}  

console.log(cliente.saldo)
cliente.depositar(30)
console.log(cliente.saldo)