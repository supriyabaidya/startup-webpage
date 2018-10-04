import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {CareerComponent} from './career.component';
import {JobDetailComponent} from './job-detail/job-detail.component';
import {JobListComponent} from './job-list/job-list.component';
import {JobComponent} from './job-list/job/job.component';


const careerRoutes: Routes = [
  {path: '', component: CareerComponent},
  {path: 'job-detail/:id', component: JobDetailComponent}
];

@NgModule({
  declarations: [
    CareerComponent,
    JobDetailComponent,
    JobListComponent,
    JobComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(careerRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class CareerModule {
}
