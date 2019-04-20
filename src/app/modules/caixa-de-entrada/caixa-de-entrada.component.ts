import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from 'src/app/services/page-data.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul,li {
      flex-grow: 1;
      list-style-type: none;
      margin: 0;
      padding: 0;
    }
  `]
})
export class CaixaDeEntradaComponent implements OnInit {
  
  title = 'cmail';

  email: Email = {
    assunto: '',
    conteudo: '',
    destinatario: '',
    dataEnvio: '',
    id: ''
  };
  
  emailList:Email[] = [];
  termoFiltro = '';
  private _isNewEmailOpen = false;

  constructor(private servico: EmailService
              ,private pageService: PageDataService) { }

  ngOnInit() {
    this.servico
        .carregar()
        .subscribe(
          listaEmailsApi => this.emailList = listaEmailsApi.reverse()
          , erro => console.log(erro)
        )

      this.pageService.defineTitulo('Caixa de entrada');
      
  }

  get isNewEmailOpen(){
    return this._isNewEmailOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailOpen = !this.isNewEmailOpen;
  }

  handleNewEmail(formMail: NgForm){

    if(formMail.invalid) return;

    let novoEmail = new Email(this.email);

    this.servico
        .enviar(novoEmail)
        .subscribe(
          (email) => {
            this.emailList.unshift(email);
            formMail.resetForm();
            this.toggleNewEmailForm();
          }
          , erro => console.log(erro)
        )
  }

  handleRemoverEmail({emailId}){
    this.servico
        .deletar(emailId)
        .subscribe(
          () => {
            this.emailList = this
                            .emailList
                            .filter( email => email.id != emailId)
          }
        )
  }

  handleFiltro(termoDeFiltro: string){
    this.termoFiltro = termoDeFiltro;
  }

  listaEmailsFiltrada(){
    return this.emailList.filter((email) => {
      if (
        email.assunto.toLowerCase().includes(this.termoFiltro.toLowerCase())
        || email.destinatario.toLowerCase().includes(this.termoFiltro.toLowerCase())
        || email.conteudo.toLowerCase().includes(this.termoFiltro.toLowerCase()) 
      ) {
        return email
      }
    })
  }

}
