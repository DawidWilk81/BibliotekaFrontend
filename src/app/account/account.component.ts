
import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';
import {  FormGroup } from '@angular/forms';
import {  Router } from '@angular/router';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.scss'],
  providers: [UserService]
})

export class AccountComponent implements OnInit{
  accountLogInDiv:HTMLElement = document.getElementById('account');
  displayLoginBar = false;
  input;
  zalogowany = true;
  current_user;
  myform: FormGroup;
  ngOnInit(): void {
    this.input = {
      username: '',
      password: '',
    }
  }  
  constructor( 
    private userService : UserService,
    private router : Router
    ) { }
  LogInToggle(){
    this.displayLoginBar = !this.displayLoginBar;
    console.log("click!");
    console.warn(this.myform.value);
  }

  registerUser(){
    this.userService.registerNewUser(this.input).subscribe(
      response => {
        alert('user ' + this.input.username + ' zarejestrowany' );
      },
      error => console.log('error', error)
    );
  }

  LogInUser(){
    this.userService.logInUser(this.input).subscribe(
      response => {
        this.current_user = this.userService.AktualnyUzytkownik();
        console.log(response);
        console.log('user ' + this.current_user + ' zalogowany' );
        this.zalogowany = !this.zalogowany;
        this.displayLoginBar = !this.displayLoginBar;
        sessionStorage.setItem('username', this.input.username);
        console.log(JSON.stringify(sessionStorage.getItem('username')));
        this.router.navigateByUrl('home');

      },
      error => alert('Nazwa uzytkownika lub Haslo nie znajduje sie w bazie danych Biblioteki')
    );
  }



}