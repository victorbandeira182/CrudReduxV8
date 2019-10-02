import {Action, createAction, props} from '@ngrx/store';
import Task from '../../model/task.model';

// ACOES PARA ESCUTAR A STORE
export const observeFirebaseTasksSubscribe = createAction(
  '[Task] {Firestore} Observa as tarefas do firestore (Subscribe)'
);

export const observeFirebaseTasksNext = createAction(
  '[Task] {Firestore} Observa as tarefas do firestore (Next)',
  props<{ tasksStateChanges: { type: string, task: Task }[] }>()
);

export const observeFirebaseTasksError = createAction(
  '[Task] {Firestore} Observa as tarefas do firestore (Error)',
  props<{ errorMessage: any }>()
);

export const observeFirebaseTasksUnsubscribe = createAction(
  '[Task] {Firestore} Observa as tarefas do firestore (Unsubscribe)'
);

// ACOES DE CRUD
export const criarTarefa = createAction(
  '[Task] {Firestore} Criar tarefa',
  props<{ tarefa: Task }>()
);

export const modificarTarefa = createAction(
  '[Task] {Firestore} Modificar tarefa',
  props<{ id: string, tarefa: Task }>()
);

export const deletarTarefa = createAction(
  '[Task] {Firestore} Deletar tarefa',
  props<{ idTarefa: string }>()
);

