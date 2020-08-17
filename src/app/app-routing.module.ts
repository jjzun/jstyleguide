import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageContentComponent } from './layout/page-content/page-content.component';


const routes: Routes = [
  {path: 'main-page', component: PageContentComponent},
  { path: '',   redirectTo: '/main-page', pathMatch: 'full' },
  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
