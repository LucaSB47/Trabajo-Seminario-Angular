import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TechStoreAboutComponent } from './tech-store-about/tech-store-about.component';
import { TechStoreCmptsComponent } from './tech-store-cmpts/tech-store-cmpts.component';

const routes: Routes = [
  {
    path:'',
    redirectTo:'computers',
    pathMatch:'full',
  },
  {
    path:'computers',
    component: TechStoreCmptsComponent
  },
  {
    path:'about',
    component: TechStoreAboutComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
