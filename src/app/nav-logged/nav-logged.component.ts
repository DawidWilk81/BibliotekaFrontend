import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-nav-logged',
  templateUrl: './nav-logged.component.html',
  styleUrls: ['./nav-logged.component.scss']
})
export class NavLoggedComponent implements OnInit {
  username = sessionStorage.getItem('username');

  constructor(private _router:Router) { }
  addBook(){
    this._router.navigateByUrl('dodajKsiazke');
  }
  myBooks(){
    this._router.navigateByUrl('mojeKsiazki');
  }
  logOut(){
    this._router.navigateByUrl('');
    sessionStorage.removeItem('username');
  }
  ngOnInit(): void {
  }

}
