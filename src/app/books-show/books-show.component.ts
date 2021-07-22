import { Component, OnInit } from '@angular/core';
import {KsiazkiService } from '../ksiazki.service';
@Component({
  selector: 'app-books-show',
  templateUrl: './books-show.component.html',
  styleUrls: ['./books-show.component.scss']
})
export class BooksShowComponent implements OnInit {
  ksiazki = [
    {tytul: 'tytanis'}, 
    {tytul: 'Reka mistrza'}
]

  constructor( private Ks : KsiazkiService) {
    this.wszystkieKsiazki();
   }
   wszystkieKsiazki = () =>{
     this.Ks.wszystkieKsiazki().subscribe(
        (data) => {
          this.ksiazki = data;
          console.log(data)
        },(error) => {
          console.log(error);
        }

     );
   }
   ksiazkaClick = (ksiazka) => {
    console.log(ksiazka.id);
    this.Ks.jednaKsiazka(ksiazka.id).subscribe(
      (data) => {
        console.log(data)
      },(error) => {
        console.log(error);
      }

   );
  }
  ngOnInit(): void {
  }

}
