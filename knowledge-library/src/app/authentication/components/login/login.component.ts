import { Component } from '@angular/core';
import { Auth, signInWithEmailAndPassword } from '@angular/fire/auth';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { selectUserToken } from '../../selectors/authentication.selectors';
import { setToken } from '../../actions/authentication.actions';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent {
  logInForm = this.formBuilder.group({
    email: ['', [Validators.required, Validators.email]],
    password: ['', [Validators.required, Validators.minLength(6)]],
  });

  token$ = this.store.select(selectUserToken);

  constructor(
    private formBuilder: FormBuilder,
    private auth: Auth,
    private router: Router,
    private store: Store
  ) {
    this.token$.subscribe((token) => console.log(token));
  }

  get email() {
    return this.logInForm.get('email');
  }

  get password() {
    return this.logInForm.get('password');
  }

  logIn() {
    if (this.logInForm.valid && this.email && this.password) {
      signInWithEmailAndPassword(
        this.auth,
        this.email.value as string,
        this.password.value as string
      )
        .then((result) => {
          result.user.getIdToken().then((token) => {
            this.store.dispatch(setToken({ token }));
          });

          this.router.navigate(['/']);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }
}
