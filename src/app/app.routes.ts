import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';

const rotasApp: Routes = [
  { path: 'inbox', loadChildren: './modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule'},
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
  { path: 'cadastro', loadChildren: './modules/cadastro/cadastro.module#CadastroModule' },
  { path: '**', redirectTo: 'inbox' }
]

//export const ModuloRoteamento = RouterModule.forRoot(rotasApp);
@NgModule({
  imports: [
    RouterModule.forRoot(rotasApp)
  ],
  exports: [
    RouterModule
  ]
})
export class ModuloRoteamento {

}
