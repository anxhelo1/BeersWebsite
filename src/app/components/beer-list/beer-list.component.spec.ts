import {BeerListComponent} from './beer-list.component';
import {BeerService} from '../../services/beer.service';
import {HttpClient } from '@angular/common/http';

describe('BeerListComponent', () => {
  let beerService: BeerService;
  let component: BeerListComponent;
  let http: HttpClient;

  beforeEach(() => {
    beerService = new BeerService(http);
    component = new BeerListComponent(beerService);
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
