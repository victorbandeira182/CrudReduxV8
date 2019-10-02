import {NgModule} from '@angular/core';
import {FlexLayoutModule} from '@angular/flex-layout';
import {ReactiveFormsModule} from '@angular/forms';
import {MaterialModule} from './material/material.module';

@NgModule({
  declarations: [],
  imports: [
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ], exports: [
    FlexLayoutModule,
    MaterialModule,
    ReactiveFormsModule,
  ]
})
export class SharedModule {
}
