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

@NgModule({
  declarations: [
    AppComponent,
    ProdutoListagemComponent,
    ProdutoDetalhesComponent,
    UsuarioCadastroComponent,
    IndexComponent,
    LoginComponent
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
