import { Component } from '@angular/core';
import { Pedidos } from '../pedidos';
import { ItemPedido } from '../itempedido';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pedidos-detalhes',
  templateUrl: './pedidos-detalhes.component.html',
  styleUrls: ['./pedidos-detalhes.component.css']
})
export class PedidosDetalhesComponent {

  id?: number;
  isNew = true;
  
  crudForm: FormGroup = this.formBuilder.group({
    produto: ['', Validators.required],
    quantidade: ['', Validators.required]
    
  })
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private service: ServicoService, private router: Router){}
    
  salvar(): void {
    if(this.isNew){
      this.service.addPedido(this.crudForm.value).subscribe({
        next: (pedidos: Pedidos) =>{
          console.log(pedidos);
          this.router.navigate(['/index']);
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('Finalizado')
      });
    } else {
      this.service.updatePedido(this.crudForm.value).subscribe({
        next: (pedidos: Pedidos) => {
            console.log(pedidos);
            this.router.navigate(['/index']);
          },
          error: (erro: any) => console.log(erro),
          complete: () => console.log('Finalizado')
      });
    }
  }
}
