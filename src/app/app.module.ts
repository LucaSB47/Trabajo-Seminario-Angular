import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CompListComponent } from './comp-list/comp-list.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { TechStoreCmptsComponent } from './tech-store-cmpts/tech-store-cmpts.component';
import { TechStoreAboutComponent } from './tech-store-about/tech-store-about.component';




@NgModule({
  declarations: [
    AppComponent,
    CompListComponent,
    CartComponent,
    TechStoreCmptsComponent,
    TechStoreAboutComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
