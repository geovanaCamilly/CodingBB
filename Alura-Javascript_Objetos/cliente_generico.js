function Cliente(nome, cpf, email, saldo)
{
    this.nome = nome
    this.cpf = cpf
    this.email = email
    this.saldo = saldo
    this.depositar = function(valor){
        this.saldo += valor
    }
}

const Geovana = new Cliente("Geovana", "7363536526",
 "geo@email.com", 100)
console.log(Geovana)
