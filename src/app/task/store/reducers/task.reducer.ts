import {Action, createReducer, on} from '@ngrx/store';

import Task from '../../model/task.model';
import {observeFirebaseTasksNext, observeFirebaseTasksSubscribe} from '../actions/task.actions';
import {createEntityAdapter, EntityAdapter, EntityState} from '@ngrx/entity';

export const tasksAdapter: EntityAdapter<Task> = createEntityAdapter<Task>({
  selectId: (task) => task.id,
  sortComparer: (a, b) => a.id < b.id ? -1 : 1
});

export interface TaskState extends EntityState<Task> {
  loading: boolean;
  loaded: boolean;
}

export const initialState: TaskState = tasksAdapter.getInitialState({
  loading: false,
  loaded: true
});

// passo 2
const reducer = createReducer(
  initialState,
  on(observeFirebaseTasksSubscribe, state => ({...state, Loaded: false, Loading: true})),
  on(observeFirebaseTasksNext, (state, {tasksStateChanges}) => {
    let _state = {...state};

    tasksStateChanges.forEach(change => {
      switch (change.type) {
        case 'added': {
          _state = tasksAdapter.addOne(change.task, _state)
          break;
        }

        case 'modified': {
          _state = tasksAdapter.updateOne({id: change.task.id, changes: change.task }, _state);
          break;
        }

        case 'removed': {
          _state = tasksAdapter.removeOne(change.task.id, _state);
          break;
        }
      }
    });

    return {
      ..._state,
      loaded: true,
      loading: false
    };
  })
);

// passo 1
export const taskReducer = (state: TaskState | undefined, action: Action) => reducer(state, action);
