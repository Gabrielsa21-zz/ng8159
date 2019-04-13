import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { map, catchError } from "rxjs/operators";
import { User } from 'src/app/models/dto/input/user';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  formCadastro = new FormGroup({
    nome: new FormControl('',[Validators.required, Validators.minLength(5)]),
    username: new FormControl('',Validators.required),
    senha: new FormControl('', Validators.required),
    avatar: new FormControl('',Validators.required, this.validaImagem.bind(this)),
    telefone: new FormControl('',[Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')])

  });

  constructor(private ajax: HttpClient
              ,private roteador: Router) { }

  ngOnInit() {}

  validaImagem(controleAvatar: FormControl){

    return this.ajax
                .head(controleAvatar.value, {observe: 'response'})
                .pipe(
                  map((resposta)=> {
                    console.log(resposta.ok);
                    return resposta.ok
                  })
                  ,catchError((erro: HttpErrorResponse) => {
                    console.warn(erro)
                    return [{urlInvalida: true}]
                  })
                )
              
  }

  validaTodosOsCampos(form: FormGroup){
    let controles = form.controls;
  
    for(let controle in controles){
      let campo = form.get(controle)
      campo.markAsTouched()
    }
  }

  handleCadastrarUsuario(){
    
    if(this.formCadastro.invalid){
     this.validaTodosOsCampos(this.formCadastro) 
     return
    }

    const user = new User(this.formCadastro.value);
    
    console.log(user);
    
    this.ajax
        .post(
          'http://localhost:3200/users',
          user
          )
        .subscribe(
          (resposta) => {
            console.log(resposta);
            this.roteador.navigate(['login'])
          }
          , erro => console.error(erro)
        )

    this.formCadastro.reset();
    
  }

}
