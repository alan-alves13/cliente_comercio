import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { Produto } from '../produtos';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.component.html',
  styleUrls: ['./produto-detalhes.component.css']
})
export class ProdutoDetalhesComponent implements OnInit {
  
  id?: number;
  isNew = true;
  
  crudForm: FormGroup = this.formBuilder.group({
    id: [0],
    nome: ['', Validators.required],
    preco: [0.0, Validators.required],
    quantidade_estoque: [0, Validators.required],
    categoria: [0, Validators.required],
    descricao: ['', Validators.required]
   
  })
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private service: ServicoService, private router: Router){}
    
  ngOnInit(): void {
    this.id = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id')!):0;

    if(this.id>0){
      this.isNew = false;
      this.service.getProdutoByID(this.id).subscribe({
       next: (produto: Produto) => this.crudForm.setValue(produto),
       error: (erro: any) => console.log(erro),
       complete: () => console.log('finalizado')
      });
    } else {
      this.isNew = true; 
    }
  }
   /*
  salvar(): void {
    if(this.isNew){
      this.service.addProduto(this.crudForm.value).subscribe({
        next: (produto: Produto) =>{
          console.log(produto);
          this.router.navigate(['/produtoslistagem']);
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('Finalizado')
      });
    } else {
      this.service.updateProduto(this.crudForm.value).subscribe({
        next: (produto: Produto) => {
            console.log(produto);
            this.router.navigate(['/produtoslistagem']);
          },
          error: (erro: any) => console.log(erro),
          complete: () => console.log('Finalizado')
      });
    }
  }
  
   */
 
  deletar(): void {
    if (!this.isNew){
      this.service.detelarProduto(this.id!).subscribe({
        next: (produto: Produto) =>{
          console.log(produto);
          this.router.navigate(['/produtoslistagem'])
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('Finalizado')
      });
    }
  }
}

