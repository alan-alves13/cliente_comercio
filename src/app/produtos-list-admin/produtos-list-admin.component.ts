import { Component, OnInit } from '@angular/core';
import { Produto } from '../produtos';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { FormGroup } from '@angular/forms';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-produtos-list-admin',
  templateUrl: './produtos-list-admin.component.html',
  styleUrls: ['./produtos-list-admin.component.css']
})
export class ProdutosListAdminComponent implements OnInit{

  produtos: Produto[] = [];
  
  selectedObject?: Produto;

  server_url_produto = "https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/";

  crudForm!: FormGroup;


  constructor(private servico: ServicoService, private router: Router, private httpClient: HttpClient) {}

  ngOnInit(): void {
    this.servico.getProduto().subscribe({
      next: (produtos: Produto[]) => this.produtos = produtos,
      error: (erro) => console.log(erro),
      complete: () => console.log('Requisicao finalizada')
    });
  }

  deletar(id: number): void {
    this.servico.detelarProduto(id).subscribe({
      next: (produto: Produto) =>{
        console.log(produto);
        location.reload();
        this.router.navigate(['/produtos-list-admin'])
      },
      error: (erro: any) => console.log(erro),
      complete: () => console.log('Finalizado')
      
    });
   
  }


  
}

