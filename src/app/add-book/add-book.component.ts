import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { KsiazkiService } from '../ksiazki.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.scss']
})
export class AddBookComponent implements OnInit {

  constructor(private _ks:KsiazkiService, private _router:Router, private http:HttpClient, private location:Location) { }
  baseurl = 'http://127.0.0.1:8000/'
  bookBody;
  file:any;
  back(){
    this.location.back();
  }
  ngOnInit(): void {
    this.bookBody = {
      tytul:'',
      autor:'',
      wydawnictwo:'',
      data_premiery:'',
      liczba_stron:'',
      zdjecie:File,
    }
  }

  onFileInput(files:FileList | null): void{
    if(files) {
      this.file = files.item(0);
      this.bookBody.zdjecie = this.file;
      console.log(this.bookBody.zdjecie) 
    }
  }

  bookPost(){
    const user = sessionStorage.getItem('username');
  const body = new FormData();
  body.append('zdjecie', this.file, this.file.name);
  body.append('tytul', JSON.stringify(this.bookBody.tytul));
  body.append('autor', this.bookBody.autor);
  body.append('wydawnictwo', JSON.stringify(this.bookBody.wydawnictwo));
  body.append('data_premiery', JSON.stringify(this.bookBody.data_premiery));
  body.append('liczba_stron', JSON.stringify(this.bookBody.liczba_stron));
  body.append('uzytkownik', JSON.stringify(user));
  return this.http.post(this.baseurl + 'api/Ksiazki/', body).subscribe(
    data => {
      alert("dodano do bazy danych");
      this._router.navigateByUrl('/home')
    },error => {console.log(error)}
  )
  }

}
