import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule, Routes} from '@angular/router';

import {AdminComponent} from './admin/admin.component';
import {ProductsComponent} from './products/products.component';
import {ServicesComponent} from './services/services.component';
import {ClientsComponent} from './clients/clients.component';
import {CareerComponent} from './career/career.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {JobDetailComponent} from './career/job-detail/job-detail.component';
import {JobListComponent} from './career/job-list/job-list.component';
import {JobComponent} from './career/job-list/job/job.component';
import {JobPostComponent} from './admin/job-post/job-post.component';
import {CareerService} from './career/career.service';

const mainRoutes: Routes = [
  {path: '', component: ProductsComponent},
  {path: 'admin', component: AdminComponent},
  {path: 'job-post', component: JobPostComponent},
  {path: 'services', component: ServicesComponent},
  {path: 'clients', component: ClientsComponent},
  {path: 'career', component: CareerComponent},
  {path: 'career/job-detail/:id', component: JobDetailComponent},
  {path: 'about', component: AboutComponent},
  {path: 'contact', component: ContactComponent}
];

@NgModule({
  declarations: [
    AdminComponent,
    ProductsComponent,
    ServicesComponent,
    ClientsComponent,
    CareerComponent,
    AboutComponent,
    ContactComponent,
    ErrorPageComponent,
    JobDetailComponent,
    JobListComponent,
    JobComponent,
    JobPostComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    NgbModule,
    RouterModule.forChild(mainRoutes)
  ],
  exports: [RouterModule],
  providers: [CareerService]
})
export class MainModule {
}
