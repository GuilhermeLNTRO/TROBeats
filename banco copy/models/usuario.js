class Usuario {
    constructor(id, tipoUsuario, nome, email, senha, cpf) {
        this.id = id;
        this.tipoUsuario = tipoUsuario;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.cpf = cpf;
    }
}

module.exports = Usuario;