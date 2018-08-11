import { MessagingService } from 'app/services/messaging.service';
import { AuthService } from './services/auth.service';
import { GamesService } from './services/games.service';
import { environment } from './../environments/environment';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularFireModule } from 'angularfire2';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { MatButtonModule,
         MatCheckboxModule,
         MatCardModule,
         MatMenuModule,
         MatToolbarModule,
         MatIconModule,
         MatFormFieldModule,
         MatInputModule,
         MatGridListModule,
         MatSlideToggleModule,
         MatChipsModule,
         MatListModule,
         MatDialogModule, } from '@angular/material';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { ComponentsMockComponent } from './components/components-mock/components-mock.component';
import { AppRoutingModule } from './/app-routing.module';
import { GamesComponent } from './components/games/games.component';
import { LoginComponent } from './components/login/login.component';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { RegisterComponent } from './components/register/register.component';
import { ManageGamesComponent } from './components/manage-games/manage-games.component';
import { GamesListCompactComponent } from './components/games-list-compact/games-list-compact.component';
import { GamesListCompactItemComponent } from './components/games-list-compact-item/games-list-compact-item.component';
import { ModalComponent } from './components/modal/modal.component';
import { GameFormComponent } from './components/game-form/game-form.component';
import { EditGameComponent } from './components/edit-game/edit-game.component';
import { ActionsGameComponent } from './components/actions-game/actions-game.component';
import { ModalHostDirective } from './directives/modal-host.directive';
import { AddGameComponent } from './components/add-game/add-game.component';
import { AddGameFormComponent } from './components/add-game-form/add-game-form.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    DashboardComponent,
    UserDetailsComponent,
    ComponentsMockComponent,
    GamesComponent,
    LoginComponent,
    RegisterComponent,
    ManageGamesComponent,
    GamesListCompactComponent,
    GamesListCompactItemComponent,
    ModalComponent,
    GameFormComponent,
    EditGameComponent,
    ActionsGameComponent,
    ModalHostDirective,
    AddGameComponent,
    AddGameFormComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatCheckboxModule,
    MatCardModule,
    MatMenuModule,
    MatToolbarModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatGridListModule,
    MatSlideToggleModule,
    MatChipsModule,
    MatListModule,
    MatDialogModule,
    AppRoutingModule,
    AngularFireAuthModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    FlashMessagesModule.forRoot(),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
  ],
  entryComponents: [
    EditGameComponent,
    GameFormComponent,
    AddGameFormComponent,
    ModalComponent
  ],
  providers: [
    GamesService,
    AuthService,
    MessagingService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
