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
    
      constructor(private route: ActivatedRoute, private service: ServicoService){}
      ngOnInit(): void {
        this.id = this.route.snapshot.paramMap.get('id') ? parseInt(this.route.snapshot.paramMap.get('id')!):0;
    
          this.isNew = false;
          this.service.getUsuarioByID(this.id).subscribe({
          next: (usuarios: Usuario) => usuarios,
           error: (erro: any) => console.log(erro),
           complete: () => console.log('finalizado')
          });
        } 
      }
       
  