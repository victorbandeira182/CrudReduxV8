import {AppRoutingModule} from './app-routing.module';
// --------------
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
// --------------
import {AppComponent} from './app.component';
import {SharedModule} from './core/shared/shared.module';
// --------------
import {environment} from 'src/environments/environment';
import {AngularFireAuthModule} from '@angular/fire/auth';
import {AngularFireModule} from '@angular/fire';
import {AngularFirestoreModule} from '@angular/fire/firestore';
import {RouterModule} from '@angular/router';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
// --------------
import { StoreModule } from '@ngrx/store';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
// --------------
import { TaskModule } from './task/task.module';
import {EffectsModule} from '@ngrx/effects';
import {TaskEffects} from './task/store/effects/task.effect';
import {globalTasksReducers} from './task/store/reducers/global.reducer';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    RouterModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireAuthModule,
    AngularFirestoreModule,
    TaskModule,
    StoreModule.forRoot( {}),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({maxAge: 25}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
