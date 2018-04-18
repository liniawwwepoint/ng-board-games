import { RegisterComponent } from './components/register/register.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './components/login/login.component';
import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ComponentsMockComponent } from './components/components-mock/components-mock.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
  {path: '', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'user', component: UserDetailsComponent, canActivate: [AuthGuard]},
  {path: 'login', component: LoginComponent},
  {path: 'register', component: RegisterComponent},
  {path: 'components-mock', component: ComponentsMockComponent, canActivate: [AuthGuard]}
]

@NgModule({
  exports: [
    RouterModule
  ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  providers: [
    AuthGuard
  ]
})
export class AppRoutingModule {

}
