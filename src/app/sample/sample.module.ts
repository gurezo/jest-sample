import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SampleComponent } from './sample.component';
import { SampleService } from './sample.service';

@NgModule({
  declarations: [
    SampleComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    SampleService
  ]
})
export class SampleModule { }
