import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtos-list-admin',
  templateUrl: './produtos-list-admin.component.html',
  styleUrls: ['./produtos-list-admin.component.css']
})
export class ProdutosListAdminComponent implements OnInit{

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
  
}

