import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { Endereco } from '../endereco';

@Component({
  selector: 'app-endereco-detalhes',
  templateUrl: './endereco-detalhes.component.html',
  styleUrls: ['./endereco-detalhes.component.css']
})
export class EnderecoDetalhesComponent {
    
      endereco: Endereco[] = [];
      id?: number;
      isNew = true;
      selectedObject?: Endereco;
      crudForm: FormGroup = this.formBuilder.group({
        logradouro: ['', Validators.required],
        cep: ['', Validators.required],
        numero: ['', Validators.required],
        uf: ['', Validators.required],
        cidade: ['', Validators.required],
        complemento: ['', Validators.required]
      })
      
      constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
        private service: ServicoService, private router: Router) {}
        
      ngOnInit(): void {
       
        this.service.getEndereco().subscribe({
          next: (endereco: Endereco[]) => this.endereco = endereco,
          error: (erro) => console.log(erro),
          complete: () => console.log('Requisicao finalizada')
          });
        } 
    //  }
       
      // salvar(): void {
      //   if(this.isNew){
      //     this.service.addEndereco(this.crudForm.value).subscribe({
      //       next: (endereco: Endereco) =>{
      //         console.log(endereco);
      //         this.router.navigate(['/index']);
      //       },
      //       error: (erro: any) => console.log(erro),
      //       complete: () => console.log('Finalizado')
      //     });
      //   } else {
      //     this.service.updateEndereco(this.crudForm.value).subscribe({
      //       next: (endereco: Endereco) => {
      //           console.log(endereco);
      //           this.router.navigate(['/index']);
      //         },
      //         error: (erro: any) => console.log(erro),
      //         complete: () => console.log('Finalizado')
      //     });
      //   }
      // }
    
      deletar(id: number): void {
          this.service.deletarEndereco(id).subscribe({
            next: (endereco: Endereco) =>{
              console.log(endereco);
              location.reload();
              this.router.navigate(['/endereco-detalhes'])
            },
            error: (erro: any) => console.log(erro),
            complete: () => console.log('Finalizado')
          });
        }
    }
