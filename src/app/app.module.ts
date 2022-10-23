import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompListComponent } from './comp-list/comp-list.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { TechStoreCmptsComponent } from './tech-store-cmpts/tech-store-cmpts.component';
import { TechStoreAboutComponent } from './tech-store-about/tech-store-about.component';
import { InputIntComponent } from './input-int/input-int.component';
import { HttpClientModule } from '@angular/common/http'




@NgModule({
  declarations: [
    AppComponent,
    CompListComponent,
    CartComponent,
    TechStoreCmptsComponent,
    TechStoreAboutComponent,
    InputIntComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
