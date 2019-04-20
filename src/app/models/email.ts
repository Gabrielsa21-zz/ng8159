export class Email {
    destinatario = '';
    assunto = '';
    conteudo = '';
    dataEnvio = '';
    id = ''

    //destructuring
    constructor({destinatario, assunto, conteudo, dataEnvio, id}){
        this.assunto = assunto;
        this.destinatario= destinatario;
        this.conteudo = conteudo;
        this.dataEnvio = dataEnvio;
        this.id = id;
    }
}