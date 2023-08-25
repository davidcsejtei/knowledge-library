import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NavigationComponent } from './shared/components/navigation/navigation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth, getAuth } from '@angular/fire/auth';
import { KnowledgeTestComponent } from './knowledge-test/knowledge-test.component';
import { AddCategoriesComponent } from './categories/components/add-categories/add-categories.component';
import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { UserState } from './authentication/selectors/authentication.selectors';
import { CategoriesFeatureState } from './categories/selectors/category.selectors';
import { reducers, metaReducers } from './reducers';
// import { provideDatabase, getDatabase } from '@angular/fire/database';

export interface AppState {
  user: UserState;
  categories: CategoriesFeatureState;
}

@NgModule({
  declarations: [
    NavigationComponent,
    AppComponent,
    LoginComponent,
    RegisterComponent,
    AddCategoriesComponent,
  ],
  imports: [
    KnowledgeTestComponent,
    ReactiveFormsModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    StoreModule.forRoot(reducers, {
      metaReducers,
    }),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    // provideDatabase(() => getDatabase()),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
