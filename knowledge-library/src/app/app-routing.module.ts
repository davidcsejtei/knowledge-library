import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './authentication/components/login/login.component';
import { RegisterComponent } from './authentication/components/register/register.component';
import { authGuard } from './authentication/guards/auth.guard';
import { KnowledgeTestComponent } from './knowledge-test/knowledge-test.component';
import { AddCategoriesComponent } from './add-categories/add-categories.component';

const routes: Routes = [
  {
    path: '',
    component: KnowledgeTestComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
    canActivate: [authGuard()],
  },
  {
    path: 'add-categories',
    component: AddCategoriesComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
