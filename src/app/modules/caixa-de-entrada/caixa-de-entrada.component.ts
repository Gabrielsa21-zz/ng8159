import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from 'src/app/models/email';
import { EmailService } from 'src/app/services/email.service';

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
    dataEnvio: ''
  };
  
  emailList:Email[] = [];

  private _isNewEmailOpen = false;

  constructor(private servico: EmailService) { }

  ngOnInit() {
    this.servico
        .carregar()
        .subscribe(
          listaEmailsApi => {
            console.log(listaEmailsApi);
            this.emailList = listaEmailsApi;
          }
        )
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
            this.emailList.push(email)
            formMail.resetForm();
            this.toggleNewEmailForm();
          }
          , erro => console.log(erro)
        )
  }

}
