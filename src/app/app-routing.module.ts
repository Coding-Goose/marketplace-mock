import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {DetailComponent} from './detail/detail.component';
import {OverviewComponent} from './overview/overview.component';

const routes: Routes = [
  {
    path: 'detail/:id',
    component: DetailComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: OverviewComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
