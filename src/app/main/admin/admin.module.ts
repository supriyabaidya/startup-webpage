import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin.component';
import {JobPostComponent} from './job-post/job-post.component';


const adminRoutes: Routes = [
  {path: '', component: AdminComponent},
  {path: 'job-post', component: JobPostComponent}
];

@NgModule({
  declarations: [
    AdminComponent,
    JobPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule.forChild(adminRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class AdminModule {
}
