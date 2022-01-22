import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { SaladsComponent } from './salads/salads.component';
import { CarouselComponent } from './carousel/carousel.component';
import { FreshFoodComponent } from './fresh-food/fresh-food.component';

@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    SaladsComponent,
    CarouselComponent,
    FreshFoodComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
