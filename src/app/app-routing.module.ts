import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProdutoDetalhesComponent } from './produto-detalhes/produto-detalhes.component';
import { ProdutoListagemComponent } from './produto-listagem/produto-listagem.component';

const routes: Routes = [
  {path: 'produtoslistagem', component: ProdutoListagemComponent},
  {path: 'produtosdetalhe', component: ProdutoDetalhesComponent},
  {path: 'produtosdetalhe/:id', component: ProdutoDetalhesComponent},
  {path: '', redirectTo: '/produtoslistagem', pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
