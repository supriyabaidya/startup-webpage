import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {JobPostComponent} from './admin/job-post/job-post.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ServicesComponent} from './services/services.component';
import {ClientsComponent} from './clients/clients.component';
import {CareerComponent} from './career/career.component';
import {JobDetailComponent} from './career/job-detail/job-detail.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {LoginComponent} from './login/login.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'admin', component: AdminComponent},
  {path: 'job-post', component: JobPostComponent},
  {path: 'home', component: HomeComponent},
  {path: 'products', component: ProductsComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'career', component: CareerComponent},
  {path: 'career/job-detail/:id', component: JobDetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent},
  {path: 'login', component: LoginComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {errorMessage: 'page not found!!'}},
  // {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
