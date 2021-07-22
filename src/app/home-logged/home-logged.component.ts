import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-logged',
  templateUrl: './home-logged.component.html',
  styleUrls: ['./home-logged.component.scss']
})
export class HomeLoggedComponent implements OnInit {
  username = sessionStorage.getItem('username');
  constructor() { }

  ngOnInit(): void {
  }

}