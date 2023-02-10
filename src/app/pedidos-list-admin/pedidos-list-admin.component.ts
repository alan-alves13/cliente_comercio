import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../pedidos';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-list-admin',
  templateUrl: './pedidos-list-admin.component.html',
  styleUrls: ['./pedidos-list-admin.component.css']
})
export class PedidosListAdminComponent implements OnInit{

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
        location.reload();
        this.router.navigate(['/pedidos-listagem'])
      },
      error: (erro: any) => console.log(erro),
      complete: () => console.log('Finalizado')
    });
  }
}