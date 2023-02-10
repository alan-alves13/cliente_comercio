import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { Produto } from '../produtos';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-produto-cadastro',
  templateUrl: './produto-cadastro.component.html',
  styleUrls: ['./produto-cadastro.component.css']
})
export class ProdutoCadastroComponent implements OnInit {
  
  id?: number;
  isNew = true;
  fileName = '';
  produto?: Produto;
  selectedFile!: File;

  server_url_produto = "https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/";

  crudForm!: FormGroup;
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private service: ServicoService, private router: Router, private httpClient: HttpClient){}
    
  
  ngOnInit(): void {  
     this.crudForm = this.formBuilder.group({
      id: [0],
      nome: ['', Validators.required],
      preco: [0.0, Validators.required],
      quantidade_estoque: [0, Validators.required],
      descricao: ['', Validators.required],
      categoria: [0, Validators.required],
      foto: ['', Validators.required]
     });
  }
   
  onFileSelected(event: any) {
    if (event.target.files.length>0){
      const file = event.target.files[0];
      this.crudForm.get('foto')?.setValue(file);
    }
}

 
  
  salvar(): void {
     const formData = new FormData();

     formData.append('foto', this.crudForm.get('foto')?.value);
 
     formData.append('nome', this.crudForm.get('nome')?.value);

     formData.append('preco', this.crudForm.get('preco')?.value);

     formData.append('quantidade_estoque', this.crudForm.get('quantidade_estoque')?.value);

     formData.append('descricao', this.crudForm.get('descricao')?.value);
     
     formData.append('categoria', this.crudForm.get('categoria')?.value);

     this.httpClient.post(this.server_url_produto, formData).subscribe(
           res => {
            console.log(res);
            alert('cadastro realizado com sucesso');
            this.router.navigate(['/produtos-list-admin']);
           }
     )
   
    next: (produto: Produto) =>{
      console.log(produto);
      this.router.navigate(['/produtos-list-admin'])
    }
    
  }

  deletar(): void {
    if (!this.isNew){
      this.service.detelarProduto(this.id!).subscribe({
        next: (produto: Produto) =>{
          console.log(produto);
          location.reload();
          this.router.navigate(['/produtos-list-admin'])
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('Finalizado')
      });
    }
  }
}