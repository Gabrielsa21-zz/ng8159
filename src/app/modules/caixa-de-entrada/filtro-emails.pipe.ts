import { PipeTransform, Pipe } from '@angular/core';
import { Email } from 'src/app/models/email';

@Pipe({
  name: 'filtroEmail'
})
export class FiltroEmailPipe implements PipeTransform {

  transform(emailList: Email[], termoFiltro: string) {

    return emailList.filter((email) => {
      if (
        email.assunto.toLowerCase().includes(termoFiltro.toLowerCase())
        || email.destinatario.toLowerCase().includes(termoFiltro.toLowerCase())
        || email.conteudo.toLowerCase().includes(termoFiltro.toLowerCase()) 
      ) {
        return email
      }
    })
  }

}