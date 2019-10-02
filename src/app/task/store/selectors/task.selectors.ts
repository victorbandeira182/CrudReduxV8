import {createFeatureSelector, createSelector} from '@ngrx/store';

import {GlobalTasksState, selectGlobalTasksFeature} from '../reducers/global.reducer';
import {tasksAdapter, TaskState} from '../reducers/task.reducer';

export const selectTasksFeature = createSelector(
  selectGlobalTasksFeature,
  (state: GlobalTasksState) => state.tasks
);

export const getTasks = createSelector(
  selectTasksFeature,
  (state: TaskState) => tasksAdapter.getSelectors().selectAll(state)
);
