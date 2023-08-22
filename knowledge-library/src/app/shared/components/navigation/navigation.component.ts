import { Component } from '@angular/core';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  loggedIn = localStorage.getItem('token');

  constructor() {}

  logOut() {
    localStorage.removeItem('token');
    this.loggedIn = localStorage.getItem('token');
  }
}
