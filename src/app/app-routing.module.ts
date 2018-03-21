import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', component: DashboardComponent },
    {path: 'user', component: UserDetailsComponent }
]

@NgModule({
    exports: [
        RouterModule
    ],
  imports: [
    RouterModule.forRoot(routes)
  ],
  declarations: []
})
export class AppRoutingModule {


 }
