import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../pedidos';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-listagem',
  templateUrl: './pedidos-listagem.component.html',
  styleUrls: ['./pedidos-listagem.component.css']
})
export class PedidosListagemComponent implements OnInit{

  pedidos: Pedidos[] = [];

  selectedObject?: Pedidos;

constructor(private servico: ServicoService, private router: Router) {}
  ngOnInit(): void {
    this.servico.getPedidos().subscribe({
      next: (pedidos: Pedidos[]) => this.pedidos = pedidos,
      error: (erro) => console.log(erro),
      complete: () => console.log('Requisicao finalizada')
    });
   
  }
  deletar(id: number): void {
    this.servico.deletarPedido(id).subscribe({
      next: (pedido: Pedidos) =>{
        console.log(pedido);
        this.router.navigate(['/pedidos-listagem'])
      },
      error: (erro: any) => console.log(erro),
      complete: () => console.log('Finalizado')
    });
  }
}
