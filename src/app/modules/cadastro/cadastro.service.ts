import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable()
export class CadastroServie {

  url = 'http://localhost:3200/users';

  constructor(private conexao: HttpClient) { }

  cadastrar(dadosCadastro) {
    return this.conexao
      .post(this.url, dadosCadastro)
      .pipe(
        map(
          (resposta: any) => {
            localStorage.setItem('cadastro', resposta);
            return resposta;
          }
        )
      )
  }
}
