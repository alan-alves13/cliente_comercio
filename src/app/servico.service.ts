import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Produto } from './produtos';
import { Usuario } from './usuarios';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicoService {

  constructor(private http: HttpClient ) { }


  getProduto(): Observable<Produto[]>{

    //Recuperar o token da API

    return this.http.get<Produto[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/',{headers: new HttpHeaders(
      {
        'Authorization': 'Bearer' + 'eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCIsImtpZCI6InFWOFFUN2JwN1hnMW9xRTZ0ZUlnZyJ9.eyJpc3MiOiJodHRwczovL2Rldi0zdXF1c3J1aXRzaWducnJlLnVzLmF1dGgwLmNvbS8iLCJzdWIiOiJZcnpoYnhnd3BlcG1KQ1AwUFZCbkRPTE1aSzJuSHUycUBjbGllbnRzIiwiYXVkIjoiaHR0cHM6Ly9hdXRoMC1qd3QtYXV0aG9yaXplciIsImlhdCI6MTY3NTQyOTM0OCwiZXhwIjoxNjc3MjkzMzQ4LCJhenAiOiJZcnpoYnhnd3BlcG1KQ1AwUFZCbkRPTE1aSzJuSHUycSIsImd0eSI6ImNsaWVudC1jcmVkZW50aWFscyJ9.kaOsJajnvbmRo-6okMSnSM9KBVuWf69x8PxopOR1JaZJZIdR65sMBpJMkNDT8yk5xxWLZn0bCztX51Zh3iRZPA1ZGxo1jv9HfTH6PrNJeBo3dx3w8H6pFWi3zFxIxVukZ1lOXLtgJOOIJlOqE2XetHS5apboYkZvnzlr7XAqeMMTzsXC1h95i-uAYv1_uk_oh4jH03XtLjqIVGWYbvtBYfMajAs_YRqGxS0gxKkU7CCKbcL69cXPBbQjtCGYFbeNjNipXl7k_F9G_Gy9S_Bc9yMQQWENH0o2tgqJ0h6aaNqt8PTAWmo-QMgaRZ2lPOq7GBHh-1AhKQ3E5eOk9f3xGw',
         'Content-Type': 'application/json'
            })});
    //return this.http.get<Produto[]>('http://localhost:3000/produtos');

  }
  getProdutoByID(id: number): Observable<Produto>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
    const url = `http://localhost:3000/produtos/${id}`;

    return this.http.get<Produto>(url);
  }

  addProduto(produto: Produto): Observable<Produto>{
    return this.http.post<Produto>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/', produto);
  //return this.http.post<Produto>('http://localhost:3000/produtos', produto);
    
  }

  updateProduto(produto: Produto): Observable<Produto>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${produto.id}`;
     const url = `http://localhost:3000/produtos/${produto.id}`;

   return this.http.put<Produto>(url, produto);
  }

  detelarProduto(id: number): Observable<Produto>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
   const url = `http://localhost:3000/produtos/${id}`;

   return this.http.delete<Produto>(url);
  }

  getUsuario(): Observable<Usuario[]>{
    //return this.http.get<Produto[]>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/');
    return this.http.get<Usuario[]>('http://localhost:3000/usuarios');

  }
  getUsuarioByID(id: number): Observable<Usuario>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
    const url = `http://localhost:3000/usuarios/${id}`;

    return this.http.get<Usuario>(url);
  }

  addUsuario(usuario: Usuario): Observable<Usuario>{
   // return this.http.post<Produto>('https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/', produto);
  return this.http.post<Usuario>('http://localhost:3000/usuarios', usuario);
    
  }

  updateUsuario(usuario: Usuario): Observable<Usuario>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${produto.id}`;
     const url = `http://localhost:3000/usuario/${usuario.id}`;

   return this.http.put<Usuario>(url, usuario);
  }

  deletarUsuario(id: number): Observable<Usuario>{
   // const url = `https://t2oglps6h0.execute-api.us-east-1.amazonaws.com/dev/produtos/${id}`;
   const url = `http://localhost:3000/usuarios/${id}`;

   return this.http.delete<Usuario>(url);
  }
}
