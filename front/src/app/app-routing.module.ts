import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './menu/menu.component';
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { EdituserComponent } from './edituser/edituser.component';

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'user/edit/:id', component: EdituserComponent },
  { path: 'menu', component: MenuComponent },
  { path: '', component: HomeComponent },
  { path: '404', component: FourOhFourComponent },
  { path: '**', redirectTo: '404' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' })],
  exports: [RouterModule],
})
export class AppRoutingModule {}
