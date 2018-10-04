import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ClientsComponent} from './clients.component';


const clientRoutes: Routes = [
  {path: '', component: ClientsComponent}
];

@NgModule({
  declarations: [
    ClientsComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(clientRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class ClientsModule {
}
