import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-usuario-cadastro',
  templateUrl: './usuario-cadastro.component.html',
  styleUrls: ['./usuario-cadastro.component.css']
})
export class UsuarioCadastroComponent {
 
  id?: number;
  isNew = true;
  
  crudForm: FormGroup = this.formBuilder.group({
    nome: ['', Validators.required],
    cpf: ['', Validators.required],
    email: ['', Validators.required],
    senha: ['', Validators.required],
    data_nascimento: ['', Validators.required]
   
  })
  
  constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
    private service: ServicoService, private router: Router){}
    
  ngOnInit(): void {
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
   
  salvar(): void {
    if(this.isNew){
      this.service.addUsuario(this.crudForm.value).subscribe({
        next: (usuario: Usuario) =>{
          console.log(usuario);
          this.router.navigate(['/index']);
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('Finalizado')
      });
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
