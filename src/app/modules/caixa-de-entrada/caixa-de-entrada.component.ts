import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Email } from 'src/app/models/email';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styleUrls: ['./caixa-de-entrada.component.css']
})
export class CaixaDeEntradaComponent implements OnInit {
  

  title = 'cmail';

  email: Email = {
    assunto: '',
    conteudo: '',
    destinatario: ''
  };
  
  emailList:Email[] = [];

  private _isNewEmailOpen = false;

  constructor() { }

  ngOnInit() {
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
    this.emailList.push(novoEmail)

    formMail.resetForm();

  }

  

}
