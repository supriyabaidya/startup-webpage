import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ErrorPageComponent} from './error-page.component';


const errorRoutes: Routes = [
  {path: '', component: ErrorPageComponent}
];

@NgModule({
  declarations: [
    ErrorPageComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(errorRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class ErrorPageModule {
}
