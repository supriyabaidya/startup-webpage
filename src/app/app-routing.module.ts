import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

import {HomeComponent} from './core/home/home.component';

const appRoutes: Routes = [
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: 'admin', loadChildren: './main/admin/admin.module#AdminModule'},
  {path: 'home', component: HomeComponent},
  {path: 'products', loadChildren: './main/products/products.module#ProductsModule'},
  {path: 'services', loadChildren: './main/services/services.module#ServicesModule'},
  {path: 'clients', loadChildren: './main/clients/clients.module#ClientsModule'},
  {path: 'career', loadChildren: './main/career/career.module#CareerModule'},
  {path: 'about', loadChildren: './main/about/about.module#AboutModule'},
  {path: 'contact', loadChildren: './main/contact/contact.module#ContactModule'},
  {path: 'login', loadChildren: './auth/auth.module#AuthModule'},
  {path: 'not-found', loadChildren: './main/error-page/error-page.module#ErrorPageModule', data: {errorMessage: 'page not found!!!'}},
  {path: '**', redirectTo: '/not-found'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {preloadingStrategy: PreloadAllModules})
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule {
}
