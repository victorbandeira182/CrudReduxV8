import {taskReducer, TaskState} from './task.reducer';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';

export const tasksFeatureKey = 'tasks-store';

export interface GlobalTasksState {
  tasks: TaskState;
}

export const globalTasksReducers: ActionReducerMap<GlobalTasksState> = {
  tasks: taskReducer
};

export const selectGlobalTasksFeature = createFeatureSelector<GlobalTasksState>(
  tasksFeatureKey
);
