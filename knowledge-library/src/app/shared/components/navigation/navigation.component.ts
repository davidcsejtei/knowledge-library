import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { setToken } from 'src/app/authentication/actions/authentication.actions';
import { selectTokenA } from 'src/app/authentication/selectors/authentication.selectors';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.css'],
})
export class NavigationComponent {
  token$ = this.store.select(selectTokenA);
  isLoggedIn = false;

  constructor(private store: Store) {
    this.token$.subscribe((token) => {
      console.log('From nav: ', token);
      this.isLoggedIn = token !== '';
    });
  }

  logOut() {
    localStorage.removeItem('token');
    this.isLoggedIn = false;
    this.store.dispatch(setToken({ token: '' }));
  }
}
