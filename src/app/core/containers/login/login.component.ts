import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../../authentication/service/auth.service';
import {observeFirebaseTasksSubscribe} from '../../../task/store/actions/task.actions';
import {Store} from '@ngrx/store';
import {TaskState} from '../../../task/store/reducers/task.reducer';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(public authenticationService: AuthService, public store: Store<TaskState>) {
  }

  ngOnInit() {

  }


  // Entra com Google

  signinGoogle() {
    this.authenticationService.signinWithGoogle();
    this.store.dispatch(observeFirebaseTasksSubscribe());
    console.log('Entrando com a conta Google');
  }

}
