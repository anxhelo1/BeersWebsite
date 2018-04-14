import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BeerListComponent } from './components/beer-list/beer-list.component';
import { BeerDetailsComponent } from './components/beer-details/beer-details.component';

@NgModule({
  declarations: [
    AppComponent,
    BeerListComponent,
    BeerDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
