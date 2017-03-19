import { Component } from '@angular/core';
import { NavbarComponent } from './navbar/navbar.component';
import { UserComponent } from './users/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [UserComponent]
})
export class AppComponent {
  
  newnote: any;
  url: any;
  showUrl: boolean = true;
  createnote(){
    this.url = "http://localhost:4200/notes/"+this.newnote;
    console.log(this.url);
    this.showUrl = false;
    window.location.href = this.url;
  }
}
