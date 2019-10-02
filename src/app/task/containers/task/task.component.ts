import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
// -------
import Task from '../../model/task.model';

// -------
import {Store, select} from '@ngrx/store';

// -------
import {Observable} from 'rxjs';
// -------
import { AuthService } from '../../../authentication/service/auth.service';
import {TaskState} from '../../store/reducers/task.reducer';
import {getTasks} from '../../store/selectors/task.selectors';
import {observeFirebaseTasksSubscribe} from '../../store/actions/task.actions';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TaskComponent implements OnInit {

  constructor(
    public store: Store<TaskState>,
    public authenticationService: AuthService) {
  }

  public tasks = [];
  formTask = new FormGroup({
    task: new FormControl,
  });

  tasks$: Observable<Task[]>;

  ngOnInit() {
    this.tasks$ = this.store.pipe(select(getTasks));
  }

}
