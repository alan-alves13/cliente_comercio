import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { Endereco } from '../endereco';
import { HttpClient } from '@angular/common/http';
import { Usuario } from '../usuarios';


@Component({
  selector: 'app-endereco-cadastro',
  templateUrl: './endereco-cadastro.component.html',
  styleUrls: ['./endereco-cadastro.component.css']
})
export class EnderecoCadastroComponent {
   
    id?: number;
    isNew = true;
    crudForm!: FormGroup;

    server_url_endereco = "https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/endereco/";
    
   
    
    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
      private service: ServicoService, private router: Router, private httpClient: HttpClient){}
      
    ngOnInit(): void {

      this.crudForm = this.formBuilder.group({
        logradouro: ['', Validators.required],
        cep: ['', Validators.required],
        numero: ['', Validators.required],
        uf: ['', Validators.required],
        cidade: ['', Validators.required],
        complemento: ['', Validators.required],
        id_usuario: ['', Validators.required]
      })

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
   
      const formData = new FormData();

      formData.append('logradouro', this.crudForm.get('logradouro')?.value);
  
      formData.append('cep', this.crudForm.get('cep')?.value);
 
      formData.append('numero', this.crudForm.get('numero')?.value);
 
      formData.append('uf', this.crudForm.get('uf')?.value);
 
      formData.append('cidade', this.crudForm.get('cidade')?.value);
      
      formData.append('complemento', this.crudForm.get('complemento')?.value);

      formData.append('id_usuario', this.crudForm.get('id_usuario')?.value);
 

      this.httpClient.post(this.server_url_endereco, formData).subscribe(
            res => {
             console.log(res);
             alert('cadastro realizado com sucesso');
             this.router.navigate(['/endereco-detalhes']);
            }
      )
    
     next: (endereco: Endereco) =>{
       console.log(endereco);
       this.router.navigate(['/endereco-detalhes']);
     }




   /*
      if(this.isNew){
        this.service.addEndereco(this.crudForm.value).subscribe({
          next: (endereco: Endereco) =>{ 
            console.log(endereco);
            this.router.navigate(['/endereco-detalhes']);
          },
          error: (erro: any) => console.log(erro),
          complete: () => console.log('Finalizado')
        });
      } else {
        this.service.updateEndereco(this.crudForm.value).subscribe({
          next: (endereco: Endereco) => {
              console.log(endereco);
              this.router.navigate(['/endereco-detalhes']);
            },
            error: (erro: any) => console.log(erro),
            complete: () => console.log('Finalizado')
        });
      }  */
    }
  

  }
