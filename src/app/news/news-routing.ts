import { NewsModule } from './news.module';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home.component';

const newsRoutes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: ':id',
    component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(newsRoutes)],
  exports: [RouterModule]
})

export class NewsRoutingModule {}
