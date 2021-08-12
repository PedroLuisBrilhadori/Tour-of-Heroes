import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';

import { SearchLibComponent } from './search-lib.component';


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
 