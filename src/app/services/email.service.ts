import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Email } from '../models/email';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class EmailService {

  private readonly url = environment.API + 'emails';
  private readonly cabecalho = new HttpHeaders({ 'Authorization': localStorage.getItem('cmail-token') });

  constructor(private http: HttpClient) { }

  enviar(email: Email): Observable<Email> {

    const emailDto = {
      to: email.destinatario,
      subject: email.assunto,
      content: email.conteudo
    }

    return this.http
      .post<any>(this.url, emailDto, { headers: this.cabecalho })
      .pipe(
        map(emailApi => this.criaDTO(emailApi))
      )

  }

  carregar(): Observable<Email[]> {
    return this.http
      .get<any[]>(this.url, { headers: this.cabecalho })
      .pipe(
        map(
          listaEmailsApi => 
            listaEmailsApi.map(emailApi => this.criaDTO(emailApi))
        )
      )
  }

  criaDTO(emailIngles): Email {
    return new Email({
      destinatario: emailIngles.to,
      assunto: emailIngles.subject,
      conteudo: emailIngles.content,
      dataEnvio: emailIngles.created_at,
      id: emailIngles.id
    }) 
  }

  deletar(emailId): Observable<Object> {
    return this.http.delete(`${this.url}/${emailId}`,{headers: this.cabecalho})
  }

}