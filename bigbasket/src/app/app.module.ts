import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatIconModule} from '@angular/material/icon';
import { NavbarComponent } from './navbar/navbar.component';
import { DryfruitsComponent } from './dryfruits/dryfruits.component';
import { KitchenComponent } from './kitchen/kitchen.component';
import { MangoComponent } from './mango/mango.component';
import { ExoticFComponent } from './exotic-f/exotic-f.component';
import { OrganicComponent } from './organic/organic.component';
import { DealsoftheweekComponent } from './dealsoftheweek/dealsoftheweek.component';
import { MeatComponent } from './meat/meat.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { TermsComponent } from './lazycomponent/terms/terms.component';
import { HttpClientModule } from '@angular/common/http';
import { SignupComponent } from './signup/signup.component';
import { DetailsComponent } from './details/details.component';
import { Details2Component } from './details2/details2.component';
import { FruitsComponent } from './fruits/fruits.component';
import { LoginComponent } from './login/login.component';
import { Details3Component } from './details3/details3.component';
// import { LazycomponentModule } from './lazycomponent/lazycomponent.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    DryfruitsComponent,
    KitchenComponent,
    MangoComponent,
    ExoticFComponent,
    OrganicComponent,
    DealsoftheweekComponent,
    MeatComponent,
    CartComponent,
    TermsComponent,
    SignupComponent,
    DetailsComponent,
    Details2Component,
    FruitsComponent,
    LoginComponent,
    Details3Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    FormsModule,
    ReactiveFormsModule,

    HttpClientModule
    // LazycomponentModule
   
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
