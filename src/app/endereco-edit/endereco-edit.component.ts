import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { Endereco } from '../endereco';

@Component({
  selector: 'app-endereco-edit',
  templateUrl: './endereco-edit.component.html',
  styleUrls: ['./endereco-edit.component.css']
})
export class EnderecoEditComponent {
     
      id?: number;
      isNew = true;
      
      crudForm: FormGroup = this.formBuilder.group({
        logradouro: ['', Validators.required],
        cep: ['', Validators.required],
        numero: ['', Validators.required],
        uf: ['', Validators.required],
        cidade: ['', Validators.required],
        complemento: ['', Validators.required]
      })
      
      constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
        private service: ServicoService, private router: Router){}
        
      ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id')!):0;
    
        if(this.id>0){
          this.isNew = false;
          this.service.getEnderecoByID(this.id).subscribe({
           next: (endereco: Endereco) => this.crudForm.setValue(endereco),
           error: (erro: any) => console.log(erro),
           complete: () => console.log('finalizado')
          });
        } else {
          this.isNew = true; 
        }
      }
       
      salvar(): void {
        if(this.isNew){
          this.service.addEndereco(this.crudForm.value).subscribe({
            next: (endereco: Endereco) =>{
              console.log(endereco);
              this.router.navigate(['/index']);
            },
            error: (erro: any) => console.log(erro),
            complete: () => console.log('Finalizado')
          });
        } else {
          this.service.updateEndereco(this.crudForm.value).subscribe({
            next: (endereco: Endereco) => {
                console.log(endereco);
                this.router.navigate(['/index']);
              },
              error: (erro: any) => console.log(erro),
              complete: () => console.log('Finalizado')
          });
        }
      }
    
      deletar(): void {
        if (!this.isNew){
          this.service.deletarEndereco(this.id!).subscribe({
            next: (endereco: Endereco) =>{
              console.log(endereco);
              this.router.navigate(['/index'])
            },
            error: (erro: any) => console.log(erro),
            complete: () => console.log('Finalizado')
          });
        }
      }
    }
