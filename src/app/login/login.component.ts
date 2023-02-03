import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

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
    constructor(private router: Router, private formBuilder: FormBuilder,) { }

  entrar(): void {
    if(this){
            console.log("Login realizado");
            this.router.navigate(['/menu-cliente']);
          }

  
    }
  }

