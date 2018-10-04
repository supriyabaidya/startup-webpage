import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ServicesComponent} from './services.component';


const servicesRoutes: Routes = [
  {path: '', component: ServicesComponent}
];

@NgModule({
  declarations: [
    ServicesComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(servicesRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class ServicesModule {
}
