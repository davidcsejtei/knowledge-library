import { Component } from '@angular/core';
// import { selectTokenA } from './authentication/selectors/authentication.selectors';
// import { Store } from '@ngrx/store';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'knowledge-library';

  // token$ = this.store.select(selectTokenA);

  // constructor(private store: Store) {
  //   this.token$.subscribe((token) => console.log('Home: ', token));
  // }
}
