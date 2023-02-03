import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
  {path: 'produtoslistagem', component: ProdutoListagemComponent},
  {path: 'produtosdetalhe', component: ProdutoDetalhesComponent},
  {path: 'produtosdetalhe/:id', component: ProdutoDetalhesComponent},
  {path: 'usuario-cadastro', component: UsuarioCadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
