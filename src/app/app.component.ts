import { Component } from '@angular/core';
import { KsiazkiService } from './ksiazki.service';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  providers: [KsiazkiService, UserService]
})
export class AppComponent {
  
}
