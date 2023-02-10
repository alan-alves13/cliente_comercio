import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';
import { Usuario } from '../usuarios';

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css']
})

    export class UsuarioDetalhesComponent implements OnInit{
    
      usuarios: Usuario[] = [];
      id?: number;
      isNew = true;
      selectedObject?: Usuario;
    
      constructor(private route: ActivatedRoute, private service: ServicoService, private router: Router){}
      ngOnInit(): void {
        this.service.getUsuario().subscribe({
          next: (usuarios: Usuario[]) => this.usuarios = usuarios,
          error: (erro) => console.log(erro),
          complete: () => console.log('Requisicao finalizada')
          });
        } 

        
        deletar(id: number): void {
          if (!this.isNew){
            this.service.deletarUsuario(this.id!).subscribe({
              next: (usuario: Usuario) =>{
                console.log(usuario);
                this.router.navigate(['/usuario-listagem'])
                location.reload();
              },
              error: (erro: any) => console.log(erro),
              complete: () => console.log('Finalizado')
            });
          }
        }
  }

       
  