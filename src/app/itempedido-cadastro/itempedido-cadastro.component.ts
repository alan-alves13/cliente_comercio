import { Component } from '@angular/core';
import { Pedidos } from '../pedidos';
import { ItemPedido } from '../itempedido';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itempedido-cadastro',
  templateUrl: './itempedido-cadastro.component.html',
  styleUrls: ['./itempedido-cadastro.component.css']
})
export class ItempedidoCadastroComponent {

  id?: number;
  isNew = true;
  
  crudForm: FormGroup = this.formBuilder.group({

    pedido: ['', Validators.required],
    produto: ['', Validators.required],
    quantidade: ['', Validators.required]
  })
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private service: ServicoService, private router: Router){}
    
  salvar(): void {
    if(this.isNew){
      this.service.addItemPedido(this.crudForm.value).subscribe({
        next: (itempedido: ItemPedido) =>{
          console.log(itempedido);
          this.router.navigate(['/itempedido-listagem']);
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('Finalizado')
      });
    } else {
      this.service.updateItemPedido(this.crudForm.value).subscribe({
        next: (itempedido: ItemPedido) => {
            console.log(itempedido);
            this.router.navigate(['/itempedido-listagem']);
          },
          error: (erro: any) => console.log(erro),
          complete: () => console.log('Finalizado')
      });
    }
  }
}
