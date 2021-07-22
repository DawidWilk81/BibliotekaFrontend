import { Component, OnInit } from '@angular/core';
import { KsiazkiService } from '../ksiazki.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-user-books',
  templateUrl: './user-books.component.html',
  styleUrls: ['./user-books.component.scss'],
  providers: [KsiazkiService]
})
export class UserBooksComponent implements OnInit {
  ksiazki:any;
  user = JSON.stringify(sessionStorage.getItem('username'));
  constructor(private _ks:KsiazkiService, private _location:Location) { }

  ngOnInit(): void {
    this.KsiazkiUzytkownika();
    console.log(this.user);
  }
  back(){
    this._location.back();
  }
  KsiazkiUzytkownika = () => {
    this._ks.wszystkieKsiazki().subscribe(
      (respone) => {
        this.ksiazki = respone;
        console.log(this.ksiazki);
      }, (error) => {
        console.log(error);
      }
    ) 

    
  }
}
