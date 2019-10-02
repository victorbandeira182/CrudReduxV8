import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {TaskComponent} from './containers/task/task.component';
import {SharedModule} from '../core/shared/shared.module';
import {TaskRoutingModule} from './task-routing.module';
import {CoreModule} from '../core/core.module';
import { StoreModule } from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {TaskEffects} from './store/effects/task.effect';
import {globalTasksReducers, tasksFeatureKey} from './store/reducers/global.reducer';




@NgModule({
  declarations: [TaskComponent,],
  imports: [
    CommonModule,
    SharedModule,
    TaskRoutingModule,
    CoreModule,
    StoreModule.forFeature(tasksFeatureKey, globalTasksReducers),
    EffectsModule.forFeature([TaskEffects]),
  ]
})
export class TaskModule { }
