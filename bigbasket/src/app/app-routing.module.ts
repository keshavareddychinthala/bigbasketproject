import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MeatComponent } from './meat/meat.component';
import { ExoticFComponent } from './exotic-f/exotic-f.component';
import { DealsoftheweekComponent } from './dealsoftheweek/dealsoftheweek.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { HomeComponent } from './home/home.component';
import { DryfruitsComponent } from './dryfruits/dryfruits.component';
import { MangoComponent } from './mango/mango.component';
import { OrganicComponent } from './organic/organic.component';
import { CartComponent } from './cart/cart.component';
import { SignupComponent } from './signup/signup.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DetailsComponent } from './details/details.component';
import { Details2Component } from './details2/details2.component';
import { FruitsComponent } from './fruits/fruits.component';
import { LoginComponent } from './login/login.component';
import { Details3Component } from './details3/details3.component';
import { LoginGuard } from './login.guard';

const routes: Routes = [
  {
    path:'',
    redirectTo:'login',
    pathMatch:'full'
  },
  {
    path:'home',
    component:HomeComponent
  },
  {
    path:'details/:id/:pic',
    component:DetailsComponent
  }
  ,
  {
    path:'details2/:id',
    component:Details2Component
  },
  {
    path:'fruit/:id',
    component:FruitsComponent
  },
  {
 path:'details3/:id',
 component:Details3Component

  },
  {
    path:'navbar',
    component:NavbarComponent
  },
  
  {
    path:'meat',
    component:MeatComponent
  },
  {
    path:'beauty',
    component:ExoticFComponent
  },
  {
    path:'deals',
    component:DealsoftheweekComponent
  },
  {
    path:'kitchen',
    component: KitchenComponent
  },
  {
    path:'dryfruits',
    component: DryfruitsComponent
  },
  {
    path:'mango',
    component:  MangoComponent
  },
  {
    path:'organic',
    component: OrganicComponent
  },
  {
    path:'cart',
    component: CartComponent
  },
  {
    path:'signup',
    component:SignupComponent ,
  
  },
  {
    path:'login',
    component:LoginComponent ,
    canActivate:[LoginGuard]
  },
{
  path:'terms',
  loadChildren:'./lazycomponent/lazycomponent.module#LazycomponentModule'
}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
