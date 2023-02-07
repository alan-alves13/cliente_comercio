import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ServicoService } from '../servico.service';
import { HttpClient,HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  crudForm: FormGroup = this.formBuilder.group({
  
    email: ['', Validators.required],
    senha: ['', Validators.required]
   
  })
    constructor(private servico: ServicoService, private router: Router, private formBuilder: FormBuilder, private http: HttpClient ) { }

  entrar(): void {
    this.servico.getUsuario().subscribe(res=>{
      const user = res.find((a:any)=>{
        return a.email === this.crudForm.value.email && a.password === this.crudForm.value.password 
      });
      if(user){
        console.log('Login Succesful');
        if(user.cliente == true) { 
          this.router.navigate(['/menu-cliente'])
        } 
        else if (user.administrador == true) {
          this.router.navigate(['/menu-admin'])
        }
      }else{
        alert("Usuário Inválido");
        this.crudForm.reset()
      }
    }
  )}
}
