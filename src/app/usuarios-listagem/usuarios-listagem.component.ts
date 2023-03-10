import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-usuarios-listagem',
  templateUrl: './usuarios-listagem.component.html',
  styleUrls: ['./usuarios-listagem.component.css']
})

  export class UsuariosListagemComponent implements OnInit{

    usuarios: Usuario[] = [];
    
    selectedObject?: Usuario;
  
    constructor(private servico: ServicoService, private router: Router) {}
    ngOnInit(): void {
      this.servico.getUsuario().subscribe({
        next: (usuarios: Usuario[]) => this.usuarios = usuarios,
        error: (erro) => console.log(erro),
        complete: () => console.log('Requisicao finalizada')
      });
    }
    deletar(id: number): void {
      this.servico.deletarUsuario(id).subscribe({
        next: (usuario: Usuario) =>{
          console.log(usuario);
          location.reload();
          this.router.navigate(['/usuarios-listagem'])
        },
        error: (erro: any) => console.log(erro),
        complete: () => console.log('Finalizado')
      });
    }
  }
  
