import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KsiazkiService } from '../ksiazki.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-book-update',
  templateUrl: './book-update.component.html',
  styleUrls: ['./book-update.component.scss'],
  providers: [KsiazkiService],
})
export class BookUpdateComponent implements OnInit {
  ksiazka:any = {
    id:-1,
    tytul:'',
    autor:'',
    wydawnictwo:'',
    data_premiery:'',
    liczba_stron:'',
    uzytkownik:''
  };
  back(){
    this._location.back();
  }
  constructor(private route:ActivatedRoute, private _ks:KsiazkiService, private _location:Location) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this._ks.jednaKsiazka(Number(id)).subscribe(
      response => {
        this.ksiazka = response;
      },error=>(console.log(error))
    )
  }

  bookUpdate(){
    this._ks.updateKsiazka(this.ksiazka).subscribe(
      data => {
        this.ksiazka = data;
        alert('zaakceptowano zmiany w ksiazce');
        this._location.back();
      },error => {
        console.log(error);
      }
    )
  }


}
