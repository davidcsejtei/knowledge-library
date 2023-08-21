import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';

@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
  ],
  imports: [
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
