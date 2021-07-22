import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { KsiazkiService } from '../ksiazki.service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {
  
  constructor( 
    private ks: KsiazkiService,
    private route: ActivatedRoute,
    private location : Location,
    ) {}
    ksiazka;

  ngOnInit(): void {

const id = +this.route.snapshot.paramMap.get('id');
this.ks.jednaKsiazka(Number(id)).subscribe(
     (dane) =>{
    this.ksiazka = dane;
  }, (error)=> {
      console.log(error);
  }
  );
    }
    WypozyczKsiazke = () => {
      this.ks.WypozyczKsiazke(this.ksiazka).subscribe(
        (data) => {
          this.ksiazka.push(data);
        },(error) => {
          console.log(error);
        }
      )
    }

back(){
  this.location.back();
}

}
