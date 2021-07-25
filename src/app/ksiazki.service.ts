import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http'
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class KsiazkiService {
  baseUrl = 'https://bibliotekaapp.herokuapp.com/';
  httpHeaders = new HttpHeaders({'Content-Type': 'application/json'})
  constructor(private Http: HttpClient) { }

  wszystkieKsiazki(): Observable<any>{
    return this.Http.get(this.baseUrl + 'api/Ksiazki/', {headers: this.httpHeaders});
  }  
  jednaKsiazka(id): Observable<any>{
    return this.Http.get<any>(this.baseUrl + `api/Ksiazki/${id}/`);
  }
  wypozyczoneKsiazki(): Observable<any> {
    return this.Http.get<any>(this.baseUrl + 'https://bibliotekaapp.herokuapp.com/api/ksiazkiUzytkownika/')
   }
  WypozyczKsiazke(ksiazka): Observable<any> {
    const body = {tytul: ksiazka.tytul, opis: ksiazka.opis, zdjecie: ksiazka.zdjecie};
    return this.Http.post(this.baseUrl + 'api/ksiazkiUzytkownika/', body, {headers: this.httpHeaders});
  }
  updateKsiazka(ksiazka:any):Observable<any> {
    const body = {
      tytul:ksiazka.tytul,
      autor:ksiazka.autor,
      typ_okladki:ksiazka.typ_okladki,
      wydawnictwo:ksiazka.wydawnictwo,
      liczba_stron:ksiazka.liczba_stron, // typ pojazdu
      data_premiery:ksiazka.data_premiery,
      uzytkownik:ksiazka.uzytkownik,
      is_active:ksiazka.is_active
    }
    return this.Http.put(this.baseUrl + 'api/Ksiazki/' + ksiazka.id + '/', body, 
    {headers: this.httpHeaders})
  }


}
