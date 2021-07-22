import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  constructor( private Http : HttpClient) { }
  baseurl='http://127.0.0.1:8000/';
  registerNewUser(userData): Observable<any> {
    return this.Http.post(this.baseurl + 'api/register/', userData);
  }
  
  logInUser(userData): Observable<any> {
    return this.Http.post(this.baseurl + 'api/auth/', userData);
  }

  AktualnyUzytkownik(): Observable<any>{
    return this.Http.get<any>(this.baseurl + 'api/users/me');
  }
}

