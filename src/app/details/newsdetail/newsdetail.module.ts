import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { NewsdetailRoutingModule } from './newsdetail-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    NewsdetailRoutingModule
  ]
})
export class NewsdetailModule { 
  constructor(){
    console.log("newsdetail module loaded");
  }
}
