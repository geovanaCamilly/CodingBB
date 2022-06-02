const clientes = [
    {
        nome: "Andre",
        cpf:"82675659",
       dependentes: [{   
         nome:"Rafa",
         parentesco:"prima",
         dataNasc:"20/02/2006" 
         },
         {
        nome:"Lucas Vieira",
        parentesco:"primo",
        dataNasc:"04/01/2008"
         }],
      },
     {
        nome: "Juliana",
        cpf: "6353745327",
        dependentes: [{
            nome: "Sophia",
            paentesco: "filha",
            dataNasc: "30/08/2020"
        }],
    }
]

const listaDependentes = [...clientes[0].dependentes,...
clientes[1].dependentes]

console.table(listaDependentes)