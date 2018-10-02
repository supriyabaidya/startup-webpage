import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import {AppRoutingModule} from './app-routing.module';

import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {AdminComponent} from './admin/admin.component';
import {HomeComponent} from './home/home.component';
import {ProductsComponent} from './products/products.component';
import {ServicesComponent} from './services/services.component';
import {ClientsComponent} from './clients/clients.component';
import {CareerComponent} from './career/career.component';
import {AboutComponent} from './about/about.component';
import {ContactComponent} from './contact/contact.component';
import {FooterComponent} from './footer/footer.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import {LoginComponent} from './login/login.component';
import {JobDetailComponent} from './career/job-detail/job-detail.component';
import {JobListComponent} from './career/job-list/job-list.component';
import {JobComponent} from './career/job-list/job/job.component';
import {CareerService} from './career/career.service';
import {JobPostComponent} from './admin/job-post/job-post.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    AdminComponent,
    HomeComponent,
    ProductsComponent,
    ServicesComponent,
    ClientsComponent,
    CareerComponent,
    AboutComponent,
    ContactComponent,
    FooterComponent,
    ErrorPageComponent,
    LoginComponent,
    JobDetailComponent,
    JobListComponent,
    JobComponent,
    JobPostComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [CareerService],
  bootstrap: [AppComponent]
})
export class AppModule {
}
