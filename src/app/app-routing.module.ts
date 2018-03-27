import { NgModule } from '@angular/core';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ComponentsMockComponent } from './components/components-mock/components-mock.component';
import { Routes, RouterModule } from '@angular/router';


const routes: Routes = [
    {path: '', component: DashboardComponent },
    {path: 'user', component: UserDetailsComponent },
    {path: 'components-mock', component: ComponentsMockComponent}
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
