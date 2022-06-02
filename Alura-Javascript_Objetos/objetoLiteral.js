const user = {
    nome: 'Geovana',
    email: "geo.com",
    nascimento: "19/09/2005",
    role: "estudante",
    ativo: true,
    exibirInfos: function() {
        console.log(this.nome, this.email    )
    }
}

const admin = {
    nome: "Mariana",
    email: "m@m.com",
    role: "admin",
    criarCurso() {
        console.log('curso criado!')
    } 
}

Object.setPrototypeOf(admin, user)
admin.criarCurso()
admin.exibirInfos()


