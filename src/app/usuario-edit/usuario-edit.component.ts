import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-usuario-edit',
  templateUrl: './usuario-edit.component.html',
  styleUrls: ['./usuario-edit.component.css']
})
export class UsuarioEditComponent implements OnInit {

    id_usuario?: number;
    isNew = true;
   
    crudForm: FormGroup = this.formBuilder.group({
      id_usuario: [0],
      nome: ['', Validators.required],
      cpf: ['', Validators.required],
      email: ['', Validators.required],
      senha: ['', Validators.required],
      data_nascimento: ['', Validators.required],
      cliente:[],     
      administrador:[]
   
    })
    
    constructor(private route: ActivatedRoute, private formBuilder: FormBuilder,
      private service: ServicoService, private router: Router){}
      
    ngOnInit(): void {
      this.id_usuario = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id')!):0;
     
        this.service.getUsuarioByID(this.id_usuario).subscribe({
         next: (usuario: Usuario) => this.crudForm.setValue(usuario),
         error: (erro: any) => console.log(erro),
         complete: () => console.log('finalizado')
        });
      } 
      
    
    onFileSelected(event: any) {
      if (event.target.files.length>0){
        const file = event.target.files[0];
        this.crudForm.get('foto')?.setValue(file);
      }
    }
    
    salvar(): void {
      if(this.isNew){
        this.service.addUsuario(this.crudForm.value).subscribe({
          next: (usuario: Usuario) =>{
            console.log(usuario);
            if (usuario.administrador == true) {
              this.router.navigate(['/menu-admin']); 
              } else if (usuario.cliente == true) {
                this.router.navigate(['/menu-cliente']); 
              }
          },
          error: (erro: any) => console.log(erro),
          complete: () => console.log('Finalizado')
        });
      } else {
        this.service.updateUsuario(this.crudForm.value).subscribe({
          next: (usuario: Usuario) => {
              console.log(usuario);
              if (usuario.administrador == true) {
                this.router.navigate(['/usuario-detalhes']); 
                } else if (usuario.cliente == true) {
                  this.router.navigate(['/usuario-detalhes']); 
                }
            },
            error: (erro: any) => console.log(erro),
            complete: () => console.log('Finalizado')
        });
      }
    }
  
    deletar(): void {
      if (!this.isNew){
        this.service.deletarUsuario(this.id_usuario!).subscribe({
          next: (usuario: Usuario) =>{
            console.log(usuario);
            location.reload();
            this.router.navigate(['/usuario-detalhes'])
          },
          error: (erro: any) => console.log(erro),
          complete: () => console.log('Finalizado')
        });
      }
    }
  }
  
