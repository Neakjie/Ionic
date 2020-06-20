import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { NgModule } from '@angular/core';
import { DetailPage } from './detail.page';

const routes: Routes = [
  {
    path: '',
    component: DetailPage
     
  },
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class DetailRoutingModule { }