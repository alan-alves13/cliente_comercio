import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produto-listagem',
  templateUrl: './produto-listagem.component.html',
  styleUrls: ['./produto-listagem.component.css']
})
export class ProdutoListagemComponent implements OnInit{

  produtos: Produto[] = [];
  
  selectedObject?: Produto;

  constructor(private servico: ServicoService, private router: Router) {}
  ngOnInit(): void {
    this.servico.getProduto().subscribe({
      next: (produtos: Produto[]) => this.produtos = produtos,
      error: (erro) => console.log(erro),
      complete: () => console.log('Requisicao finalizada')
    });
  }
  
  OnTableRowClick(): void {
    this.router.navigate(['/produtosdetalhe', {id: this.selectedObject?.id}]);
 
  }
}
