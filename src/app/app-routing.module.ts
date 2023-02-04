import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { LoginComponent } from './login/login.component';
import { IndexComponent } from './index/index.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { UsuarioDetalhesComponent } from './usuario-detalhes/usuario-detalhes.component';
import { PedidosListagemComponent } from './pedidos-listagem/pedidos-listagem.component';
import { PedidosDetalhesComponent } from './pedidos-detalhes/pedidos-detalhes.component';

const routes: Routes = [
  {path: 'produtoslistagem', component: ProdutoListagemComponent},
  {path: 'produtosdetalhe', component: ProdutoDetalhesComponent},
  {path: 'produtosdetalhe/:id', component: ProdutoDetalhesComponent},
  {path: 'usuario-cadastro', component: UsuarioCadastroComponent},
  {path: 'login', component: LoginComponent},
  {path: 'index', component: IndexComponent},
  {path: 'menu-admin', component: MenuAdminComponent},
  {path: 'menu-cliente', component: MenuClienteComponent},
  {path: 'usuario-detalhes', component: UsuarioDetalhesComponent},
  {path: 'pedidos-listagem', component: PedidosListagemComponent},
  {path: 'pedidos-detalhes', component: PedidosDetalhesComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
