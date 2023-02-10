import { Component, OnInit } from '@angular/core';
import { ItemPedido } from '../itempedido';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-itempedido-listagem',
  templateUrl: './itempedido-listagem.component.html',
  styleUrls: ['./itempedido-listagem.component.css']
})
export class ItempedidoListagemComponent implements OnInit{

  itempedido: ItemPedido[] = [];
  
  selectedObject?: ItemPedido;

constructor(private servico: ServicoService, private router: Router) {}
  ngOnInit(): void {
    this.servico.getItemPedido().subscribe({
      next: (itempedido: ItemPedido[]) => this.itempedido = itempedido,
      error: (erro) => console.log(erro),
      complete: () => console.log('Requisicao finalizada')
    });
  }
  deletar(id: number): void {
    this.servico.deletarItemPedido(id).subscribe({
      next: (ItemPedido: ItemPedido) =>{
        console.log(ItemPedido);
        location.reload();
        this.router.navigate(['/itempedido-listagem'])
      },
      error: (erro: any) => console.log(erro),
      complete: () => console.log('Finalizado')
    });
  }
}