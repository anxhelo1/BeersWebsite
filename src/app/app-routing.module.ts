import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {BeerListComponent} from './components/beer-list/beer-list.component';
import {BeerDetailsComponent} from './components/beer-details/beer-details.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'beers', pathMatch: 'full'
  },
  {
    path: 'beers', component: BeerListComponent
  },
  {
    path: 'beers/:id', component: BeerDetailsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
