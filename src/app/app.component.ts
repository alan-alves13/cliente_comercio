import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './index/index.component.html',
  styleUrls: ['./index/index.component.css']
})
export class AppComponent {
  title = 'cliente_comercio';
 
  constructor(private router: Router) { }

}
 