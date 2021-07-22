import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { BooksShowComponent } from './books-show/books-show.component';
import { HomeComponent } from './home/home.component';
import { HomeLoggedComponent } from './home-logged/home-logged.component';
import { UserBooksComponent } from './user-books/user-books.component';
import { AddBookComponent } from './add-book/add-book.component';
import { BookUpdateComponent } from './book-update/book-update.component';
const routes: Routes = [
  {path: 'ksiazka/:id', component: DetailsComponent},
  {path: 'home/ksiazka/:id', component: DetailsComponent},
  {path: 'mojeKsiazki/ksiazka/:id', component: BookUpdateComponent},
  //login routes
  {path: '', component: HomeComponent},
  {path: 'home', component: HomeLoggedComponent},
 
  //nav routes
  {path: 'mojeKsiazki', component: UserBooksComponent},
  {path: 'dodajKsiazke', component: AddBookComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
