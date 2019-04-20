import { Routes, RouterModule } from "@angular/router";
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';

const rotasApp: Routes = [
  { 
    path: 'inbox'
    ,loadChildren: './modules/caixa-de-entrada/caixa-de-entrada.module#CaixaDeEntradaModule'
    ,canActivate: [AuthGuard]  
  },
  { path: 'login', loadChildren: './modules/login/login.module#LoginModule'},
  {path: 'cadastro',loadChildren: './modules/cadastro/cadastro.module#CadastroModule'},
  { path: '**', redirectTo: 'login' }
]

//export const ModuloRoteamento = RouterModule.forRoot(rotasApp);
@NgModule({
  imports: [
    RouterModule.forRoot(rotasApp)
  ],
  exports: [
    RouterModule
  ],
  providers: [
    AuthGuard
  ]
})
export class ModuloRoteamento {

}
