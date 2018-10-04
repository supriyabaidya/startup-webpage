import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';

import {LoginComponent} from './login/login.component';
import {RouterModule, Routes} from '@angular/router';

const authRoutes: Routes = [
  {path: '', component: LoginComponent}
];

@NgModule({
  declarations: [
    LoginComponent
  ],
  imports: [
    FormsModule,
    RouterModule.forChild(authRoutes)
  ]
})
export class AuthModule {
}
