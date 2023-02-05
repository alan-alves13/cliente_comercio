import { Component, OnInit } from '@angular/core';
import { Usuario } from '../usuarios';
import { ServicoService } from '../servico.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-usuario-detalhes',
  templateUrl: './usuario-detalhes.component.html',
  styleUrls: ['./usuario-detalhes.component.css']
})

  export class UsuarioDetalhesComponent implements OnInit{

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
    
    OnTableRowClick(): void {
      this.router.navigate(['/usuario-detalhes', {id: this.selectedObject?.id}]);
   
    }
  }
  