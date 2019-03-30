export class Email {
    destinatario = '';
    assunto = '';
    conteudo = '';

    //destructuring
    constructor({destinatario, assunto, conteudo}){
        this.assunto = assunto;
        this.destinatario= destinatario;
        this.conteudo = conteudo;
    }
}