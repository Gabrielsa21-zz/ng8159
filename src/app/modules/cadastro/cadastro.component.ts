import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { map } from "rxjs/operators";

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

  constructor(private ajax: HttpClient) { }

  ngOnInit() {}

  validaImagem(controleAvatar: FormControl){

    console.log(controleAvatar.value);
    console.log(this);
    

    //requisicao assincrona via JS, estou fazendo um AJAX - Assyncronous Javascript and XML

    this.ajax.head(controleAvatar.value)
        .pipe(
          map(
            (retorno) =>{
              console.log(retorno)
            }
          )
        )
    

    return new Promise(resolve => resolve())
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

    console.log(this.formCadastro.value);
    this.formCadastro.reset();
    
  }

}
