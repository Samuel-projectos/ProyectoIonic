import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  bebidas(): Observable<any>{
    const endPoint="https://ionicproyect-befee-default-rtdb.firebaseio.com/Bebidas.json";
    return this.http.get(endPoint);
  }

  entrantes(): Observable<any>{
    const endPoint="https://ionicproyect-befee-default-rtdb.firebaseio.com/Entrantes.json";
    return this.http.get(endPoint);
  }

  montaditos(): Observable<any>{
    const endPoint="https://ionicproyect-befee-default-rtdb.firebaseio.com/Montaditos.json";
    return this.http.get(endPoint);
  }

  platosDeLaCasa(): Observable<any>{
    const endPoint="https://ionicproyect-befee-default-rtdb.firebaseio.com/PlatosDeLaCasa.json";
    return this.http.get(endPoint);
  }
}

