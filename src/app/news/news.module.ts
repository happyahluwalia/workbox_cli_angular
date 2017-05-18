import { NewsRoutingModule } from './news-routing';
import { HomeComponent } from './home.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

@NgModule({
  imports: [
    CommonModule,
    NewsRoutingModule
  ],
  declarations: [HomeComponent]
})
export class NewsModule { }
