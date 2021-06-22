import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from 'src/features/about-us/about-us.component';
import { HomeComponent } from 'src/features/home/home.component';
import { LayoutComponent } from '../common/layout/layout.component';
import { AuthGuard } from 'src/common/auth/auth.guard';

const routes: Routes = [{
  path: '', component: LayoutComponent,
  children: [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent },
    { path: 'about-us', component: AboutUsComponent },
    { path: 'gallery', 
    canActivate: [ AuthGuard ],
    loadChildren: () => import('../features/gallery/gallery.module').then(m => m.GalleryModule) },
    { path: "**",	redirectTo: "/home"}
  ]

}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
