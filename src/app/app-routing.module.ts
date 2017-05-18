import { AppComponent } from './app.component';

import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';

import { NewsModule } from './news/news.module';

const routes: Routes = [
  {
    path: '',
    loadChildren: './news/news.module#NewsModule'
  },
  {
    path: '**',
    loadChildren: './news/news.module#NewsModule'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
