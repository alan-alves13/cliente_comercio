import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuarios';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent {
 
  id?: number;
  isNew = true;
  crudForm!: FormGroup;
 
 server_url_usuario = "https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/usuario/";
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private service: ServicoService, private router: Router, private httpClient: HttpClient){}
    
  ngOnInit(): void {
    this.crudForm= this.formBuilder.group({
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      cliente:[],     
      administrador:[],
      foto: ['', Validators.required]
    })


    this.id = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id')!):0;

    if(this.id>0){
      this.isNew = false;
      this.service.getUsuarioByID(this.id).subscribe({
       next: (usuario: Usuario) => this.crudForm.setValue(usuario),
       error: (erro: any) => console.log(erro),
       complete: () => console.log('finalizado')
      });
    } else {
      this.isNew = true; 
    }
    
 
  }
    onFileSelected(event: any) {
    if (event.target.files.length>0){
      const file = event.target.files[0];
      this.crudForm.get('foto')?.setValue(file);
    }
  }
  
  salvar(): void {
    if(this.isNew){
     /* this.service.addUsuario(this.crudForm.value).subscribe({
        next: (usuario: Usuario) =>{
          console.log(usuario);
          this.router.navigate(['/index']);
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('Finalizado')
      }); */
  
      const formData = new FormData();

      formData.append('nome', this.crudForm.get('nome')?.value);
      formData.append('cpf', this.crudForm.get('cpf')?.value);
      formData.append('email', this.crudForm.get('email')?.value);
      formData.append('senha', this.crudForm.get('data_nascimento')?.value);
      formData.append('client', this.crudForm.get('cliente')?.value);
      formData.append('administrador', this.crudForm.get('administrador')?.value);
      formData.append('foto', this.crudForm.get('foto')?.value);
   

    this.httpClient.post(this.server_url_usuario, formData).subscribe(
      res => {
      console.log(res);
      alert('cadastro realizado com sucesso');
      this.router.navigate(['/index']);
        }
  )
     



    } else {
      this.service.updateUsuario(this.crudForm.value).subscribe({
        next: (usuario: Usuario) => {
            console.log(usuario);
            this.router.navigate(['/index']);
          },
          error: (erro: any) => console.log(erro),
          complete: () => console.log('Finalizado')
      });
    }
  }

  deletar(): void {
    if (!this.isNew){
      this.service.deletarUsuario(this.id!).subscribe({
        next: (usuario: Usuario) =>{
          console.log(usuario);
          this.router.navigate(['/index'])
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('Finalizado')
      });
    }
  }
}
