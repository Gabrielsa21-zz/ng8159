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
      .post(this.url, emailDto, { headers: this.cabecalho })
      .pipe(
        map(
          (emailApi: any) => {

            const emailApiDto = {
              destinatario: emailApi.to,
              assunto: emailApi.subject,
              conteudo: emailApi.content,
              dataEnvio: emailApi.created_at
            }

            return new Email(emailApiDto);
          }
        )
      )

  }

  carregar(): Observable<Email[]> {
    return this.http
      .get(this.url, { headers: this.cabecalho })
      .pipe(
        map(
          (listaEmailsApi: any[]) => {

            return listaEmailsApi.map(
              (emailApi) => {
                const emailApiDto = {
                  destinatario: emailApi.to,
                  assunto: emailApi.subject,
                  conteudo: emailApi.content,
                  dataEnvio: emailApi.created_at
                }

                return new Email(emailApiDto);
              }
            )
          }
        )
      )
  }

}