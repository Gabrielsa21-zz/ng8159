import { CaixaDeEntradaComponent } from './modules/caixa-de-entrada/caixa-de-entrada.component';
import { Routes, RouterModule } from "@angular/router";
import { LoginComponent } from './modules/login/login.component';
import { CadastroComponent } from './modules/cadastro/cadastro.component';

const rotasApp:Routes = [
    {path: '', component: CadastroComponent},
    {path: 'inbox', component: CaixaDeEntradaComponent},
    {path: 'login', component: LoginComponent},
    {path: 'cadastro', component: CadastroComponent},
    {path: '**', redirectTo: 'inbox'}
]

export const ModuloRoteamento = RouterModule.forRoot(rotasApp);
