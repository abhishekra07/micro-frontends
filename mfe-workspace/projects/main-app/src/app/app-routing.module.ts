import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';

const productURL = 'http://localhost:6002/remoteEntry.js';
const couponURL = 'http://localhost:6003/remoteEntry.js';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'product',
    loadChildren: () => loadRemoteModule({
      remoteEntry: productURL,
      remoteName: 'product',
      exposedModule: './ProdModule'
    })
    .then(m => m.AppModule) 
  },
  {
    path: 'coupon',
    loadChildren: () => loadRemoteModule({
      remoteEntry: couponURL,
      remoteName: 'coupon',
      exposedModule: './CoupModule'
    })
    .then(m => m.AppModule) 
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
