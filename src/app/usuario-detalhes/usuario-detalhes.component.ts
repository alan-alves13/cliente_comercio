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
      crudForm: FormGroup = this.formBuilder.group({
        nome: ['', Validators.required],
        cpf: ['', Validators.required],
        email: ['', Validators.required],
        senha: ['', Validators.required],
        data_nascimento: ['', Validators.required],
        cliente:[],     
        administrador:[]
      })
      
      selectedObject?: Usuario;
    
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
       
  }
  