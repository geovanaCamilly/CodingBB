class Cliente{
    constructor(nome,email,cpf,saldo){
        this.nome = nome
        this.email = email
        this.cpf = cpf
        this.saldo = saldo
    }

    depositar(valor){
        this.saldo += valor
    }

    exibirSaldo(){
        console.log(this.saldo)
    }
}

class ClientePoupanca extends Cliente{
    constructor(nome,email,cpf,saldo,saldoPoupanca){
    // saldo que quero herdar
    super(nome,email,cpf,saldo)
    this.saldoPoupanca = saldoPoupanca
}

depositarPoupanca(valor){
    this.saldoPoupanca += valor
  }

}

const geovana = new ClientePoupanca("Geovana","geo@gmail.com",
"73547353756",100,200)

console.log(geovana)

geovana.depositar(50)
geovana.depositarPoupanca(50)

console.log(geovana)
