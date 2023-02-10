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
import { UsuariosListagemComponent } from './usuarios-listagem/usuarios-listagem.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { ProdutosListAdminComponent } from './produtos-list-admin/produtos-list-admin.component';
import { PedidosListAdminComponent } from './pedidos-list-admin/pedidos-list-admin.component';
import { ItempedidoListagemComponent } from './itempedido-listagem/itempedido-listagem.component';
import { EnderecoCadastroComponent } from './endereco-cadastro/endereco-cadastro.component';
import { EnderecoEditComponent } from './endereco-edit/endereco-edit.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { EnderecoDetalhesComponent } from './endereco-detalhes/endereco-detalhes.component';
import { PedidoCadastroComponent } from './pedido-cadastro/pedido-cadastro.component';
import { PedidoEditComponent } from './pedido-edit/pedido-edit.component';
import { ItempedidoCadastroComponent } from './itempedido-cadastro/itempedido-cadastro.component';
import {  ItempedidoEditComponent } from './itempedido-edit/itempedido-edit.component';

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
  {path: 'pedidos-detalhes/:id', component: PedidosDetalhesComponent},
  {path: 'usuarios-listagem', component: UsuariosListagemComponent},
  {path: 'produto-cadastro', component: ProdutoCadastroComponent},
  {path: 'pedido-cadastro', component: PedidoCadastroComponent},
  {path: 'produtos-list-admin', component: ProdutosListAdminComponent},
  {path: 'pedidos-list-admin', component: PedidosListAdminComponent},
  {path: 'itempedido-listagem', component: ItempedidoListagemComponent},
  {path: 'endereco-cadastro', component: EnderecoCadastroComponent},
  {path: 'endereco-edit/:id', component: EnderecoEditComponent},
  {path: 'usuario-edit/:id', component: UsuarioEditComponent},
  {path: 'endereco-detalhes', component: EnderecoDetalhesComponent},
  {path: 'pedido-cadastro', component: PedidoCadastroComponent},
  {path: 'pedido-edit/:id', component: PedidoEditComponent},
  {path: 'itempedido-cadastro', component: ItempedidoCadastroComponent},
  {path: 'itempedido-edit/:id', component: ItempedidoEditComponent},
  {path: '', redirectTo: '/index', pathMatch: 'full'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
