import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { AccountComponent } from './account/account.component';
import { BooksComponent } from './books/books.component';
import { FooterComponent } from './footer/footer.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DetailsComponent } from './details/details.component';
import { RouterModule } from '@angular/router';
import { BooksShowComponent } from './books-show/books-show.component';
import { HomeComponent } from './home/home.component';
import { HomeLoggedComponent } from './home-logged/home-logged.component';
import { UserBooksComponent } from './user-books/user-books.component';
import { NavLoggedComponent } from './nav-logged/nav-logged.component';
import { AddBookComponent } from './add-book/add-book.component';
import { FilterPipe } from './filter.pipe';
import { BookUpdateComponent } from './book-update/book-update.component';
import { FilterActivePipe } from './filter-active.pipe';
import { AllBooksPipe } from './all-books.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AccountComponent,
    BooksComponent,
    FooterComponent,
    DetailsComponent,
    BooksShowComponent,
    HomeComponent,
    HomeLoggedComponent,
    UserBooksComponent,
    NavLoggedComponent,
    AddBookComponent,
    FilterPipe,
    BookUpdateComponent,
    FilterActivePipe,
    AllBooksPipe,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
  ],
  providers: [HttpClientModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
