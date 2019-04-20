export class Email {
    destinatario = '';
    assunto = '';
    conteudo = '';
    dataEnvio = '';

    //destructuring
    constructor({destinatario, assunto, conteudo, dataEnvio}){
        this.assunto = assunto;
        this.destinatario= destinatario;
        this.conteudo = conteudo;
        this.dataEnvio = dataEnvio;
    }
}