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

function oferecerSeguro(obj){
    const propsClientes = Object.keys(cliente);
    if(propsClientes.includes("dependentes"))
  {
    console.log(`Oferta de seguro de vida para ${obj.nome}`);
  }

}

console.log(Object.entries(cliente))
console.log(Object.entries(cliente))
oferecerSeguro(cliente)