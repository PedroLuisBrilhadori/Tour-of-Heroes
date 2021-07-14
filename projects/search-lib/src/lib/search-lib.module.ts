import { NgModule } from '@angular/core';
import { SearchLibComponent } from './search-lib.component';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    SearchLibComponent
  ],
  imports: [
    BrowserModule,
    RouterModule
  ],
  exports: [
    SearchLibComponent
  ]
})
export class SearchLibModule { }
