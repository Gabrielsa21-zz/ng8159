export class User {
    name = '';
    username = '';
    password = '';
    phone = ''
    avatar = '';

    //object destructuring
    constructor({nome, username, senha, telefone, avatar}){

        this.name = nome;
        this.username = username;
        this.password = senha;
        this.phone = telefone;
        this.avatar = avatar;

    }

}