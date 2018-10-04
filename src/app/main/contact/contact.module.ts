import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule, Routes} from '@angular/router';

import {ContactComponent} from './contact.component';


const contactRoutes: Routes = [
  {path: '', component: ContactComponent}
];

@NgModule({
  declarations: [
    ContactComponent
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(contactRoutes)
  ],
  exports: [RouterModule],
  providers: []
})
export class ContactModule {
}
