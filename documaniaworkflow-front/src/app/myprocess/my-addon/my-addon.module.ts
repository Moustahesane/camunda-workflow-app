import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StartNewProcessComponent } from './start-new-process/start-new-process.component';
import { ApproveDataTaskComponent } from './approve-data-task/approve-data-task.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  entryComponents: [StartNewProcessComponent, ApproveDataTaskComponent],
  declarations: [StartNewProcessComponent, ApproveDataTaskComponent],
  imports: [
    CommonModule,
    FormsModule
  ]
})
export class MyAddonModule { }

export { StartNewProcessComponent } from './start-new-process/start-new-process.component';
export { ApproveDataTaskComponent } from './approve-data-task/approve-data-task.component';
