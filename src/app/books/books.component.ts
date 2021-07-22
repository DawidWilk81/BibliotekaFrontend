import { Component, OnInit, Input } from '@angular/core';
import { KsiazkiService } from '../ksiazki.service';
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
  providers: [KsiazkiService]
})
export class BooksComponent implements OnInit {
  ksiazki = [
    {tytul: 'tytanis'}, 
    {tytul: 'Reka mistrza'}
]
ksiazka;
  ksiazkiUzytkownika;
//Importowanie z Parent nazwy zalogowanego uzytkownika
  @Input() username: String;
  constructor( private Ks : KsiazkiService) {
    this.wszystkieKsiazki();
    this.ksiazka = {id: -1, tytul: '', opis: '', uzytkownik: ''}
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
        this.ksiazka = data;
      },(error) => {
        console.log(error);
      }

   );
  }
    KsiazkiUzytkownika = () => {
      this.Ks.wypozyczoneKsiazki().subscribe(
        (data) => {
          this.ksiazkiUzytkownika = data;
          console.log(data)
        },(error) => {
          console.log(error);
        }
      )}

  ngOnInit(): void {
    
  }

}
