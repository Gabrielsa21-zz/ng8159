import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Injectable } from '@angular/core';

@Injectable()
export class LoginService {

  url = 'http://localhost:3200/login'

  constructor(private conexao: HttpClient) { }

  autenticar(dadosLogin) {
    return this.conexao
                .post(this.url, dadosLogin)
                .pipe(
                  map(
                    (resposta: any) => {
                      localStorage.setItem('cmail-token', resposta.token)
                      return resposta
                    }
                  )
                )
  }
}