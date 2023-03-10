import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClient } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component'; //fazer requisicao
import {InputTextModule} from 'primeng/inputtext';
import {ButtonModule} from 'primeng/button';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import {InputNumberModule} from 'primeng/inputnumber';
import { UsuarioCadastroComponent } from './usuario-cadastro/usuario-cadastro.component';
import { IndexComponent } from './index/index.component';
import { LoginComponent } from './login/login.component';
import { MenuAdminComponent } from './menu-admin/menu-admin.component';
import { MenuClienteComponent } from './menu-cliente/menu-cliente.component';
import { UsuarioDetalhesComponent } from './usuario-detalhes/usuario-detalhes.component';
import { PedidosDetalhesComponent } from './pedidos-detalhes/pedidos-detalhes.component';
import { PedidosListagemComponent } from './pedidos-listagem/pedidos-listagem.component';
import { ProdutoCadastroComponent } from './produto-cadastro/produto-cadastro.component';
import { UsuariosListagemComponent } from './usuarios-listagem/usuarios-listagem.component';
import { ProdutosListAdminComponent } from './produtos-list-admin/produtos-list-admin.component';
import { PedidoCadastroComponent } from './pedido-cadastro/pedido-cadastro.component';
import { PedidosListAdminComponent } from './pedidos-list-admin/pedidos-list-admin.component';
import { ItempedidoListagemComponent } from './itempedido-listagem/itempedido-listagem.component';
import { UsuarioEditComponent } from './usuario-edit/usuario-edit.component';
import { EnderecoCadastroComponent } from './endereco-cadastro/endereco-cadastro.component';
import { EnderecoDetalhesComponent } from './endereco-detalhes/endereco-detalhes.component';
import { EnderecoEditComponent } from './endereco-edit/endereco-edit.component';
import { ItempedidoEditComponent } from './itempedido-edit/itempedido-edit.component';
import { ItempedidoCadastroComponent } from './itempedido-cadastro/itempedido-cadastro.component';
import { PedidoEditComponent } from './pedido-edit/pedido-edit.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoListagemComponent,
    ProdutoDetalhesComponent,
    UsuarioCadastroComponent,
    IndexComponent,
    LoginComponent,
    MenuAdminComponent,
    MenuClienteComponent,
    UsuarioDetalhesComponent,
    PedidosDetalhesComponent,
    PedidosListagemComponent,
    ProdutoCadastroComponent,
    UsuariosListagemComponent,
    ProdutosListAdminComponent,
    PedidoCadastroComponent,
    PedidosListAdminComponent,
    ItempedidoListagemComponent,
    UsuarioEditComponent,
    EnderecoCadastroComponent,
    EnderecoDetalhesComponent,
    EnderecoEditComponent,
    ItempedidoEditComponent,
    ItempedidoCadastroComponent,
    PedidoEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    TableModule,
    HttpClientModule,
    InputTextModule,
    InputNumberModule,
    ButtonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
