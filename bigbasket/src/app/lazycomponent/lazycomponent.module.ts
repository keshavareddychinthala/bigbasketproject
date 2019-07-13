import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TermsComponent } from './terms/terms.component';
import { Routes, RouterModule } from '@angular/router';
const myroots:Routes=[{
  path:'',
  component:TermsComponent
}]
@NgModule({
  declarations: [TermsComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(myroots)

  ],
  exports:[TermsComponent]
})
export class LazycomponentModule { }
