class User {
    constructor(nome, email, casa) {
        this.nome = nome 
        this.email = email
        this.casa = casa
    }
   static exibirInfos() {
        return `${this.nome}, ${this.email}, ${this.casa}`
    }

    static exibeNome(nome) {
        return nome
    }
}


const novoUser = new User('moisesRaparigueroBucetudo', 'c@c.com', '12312312312')
const nomeUser = novoUser.nome
console.log(User.exibeNome(nomeUser)) 


// const novoUser = new User('moisesses', 'moisescaradpica@m.cum', 'ponte' )
// console.log(novoUser.exibirInfos())