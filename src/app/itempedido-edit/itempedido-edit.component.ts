import { Component, OnInit } from '@angular/core';
import { Pedidos } from '../pedidos';
import { ItemPedido } from '../itempedido';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-itempedido-edit',
  templateUrl: './itempedido-edit.component.html',
  styleUrls: ['./itempedido-edit.component.css']
})
export class ItempedidoEditComponent implements OnInit{
  id?: number;
  isNew = true;
  
  crudForm: FormGroup = this.formBuilder.group({
    id: [0],
    pedido: ['', Validators.required],
    produto: ['', Validators.required],
    quantidade: ['', Validators.required]
    
  })
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private service: ServicoService, private router: Router){}
    ngOnInit(): void {
      this.id = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id')!):0;
  
      if(this.id>0){
        this.isNew = false;
        this.service.getItemPedidoByID(this.id).subscribe({
         next: (itempedido: ItemPedido) => this.crudForm.setValue(itempedido),
         error: (erro: any) => console.log(erro),
         complete: () => console.log('finalizado')
        });
      } else {
        this.isNew = true; 
      }
    }

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
