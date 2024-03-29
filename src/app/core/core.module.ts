import {NgModule} from '@angular/core';
import {CoreRoutingModule} from './core-routing.module';
import {SharedModule} from './shared/shared.module';
import {HomeComponent} from './containers/home/home.component';

import {LoginComponent} from './containers/login/login.component';
import {AuthGuard} from '../authentication/guard/auth.guard';
import {NavbarComponent} from './containers/navbar/navbar.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent,
    NavbarComponent,
    LoginComponent],
  imports: [
    CoreRoutingModule,
    SharedModule,
  ],
  exports: [
    NavbarComponent
  ],
  providers: [AuthGuard]

})
export class CoreModule {
}

