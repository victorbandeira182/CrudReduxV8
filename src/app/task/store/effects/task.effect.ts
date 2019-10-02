import {Injectable} from '@angular/core';

import {AngularFirestore} from '@angular/fire/firestore';


import {of} from 'rxjs';
import {catchError, map, switchMap, takeUntil} from 'rxjs/operators';

import {
  observeFirebaseTasksError,
  observeFirebaseTasksNext,
  observeFirebaseTasksSubscribe,
  observeFirebaseTasksUnsubscribe,
} from '../actions/task.actions';

import {Actions, createEffect, ofType} from '@ngrx/effects';


@Injectable()
export class TaskEffects {

  constructor(
    private actions$: Actions,
    private db: AngularFirestore
  ) {
  }

  observeFirestoreTasksSubscribe$ = createEffect(() => this.actions$.pipe(
    ofType(observeFirebaseTasksSubscribe),
    switchMap(() =>
      this.db.collection('tarefas').stateChanges().pipe(
        map((stateChanges: any) => observeFirebaseTasksNext({
            tasksStateChanges: stateChanges.map((change: any) => {
              return {
                type: change.payload.type,
                task: {id: change.payload.doc.id, ...change.payload.doc.data()}
              };
            })
          })
        ),
        catchError(err => of(observeFirebaseTasksError({errorMessage: err}))),
        takeUntil(this.actions$.pipe(ofType(observeFirebaseTasksUnsubscribe)))
      )
    )
  ));
}


