import {async, ComponentFixture, TestBed} from '@angular/core/testing';

import {BeerDetailsComponent} from './beer-details.component';
import {BeerService} from '../../services/beer.service';
import {HttpClient} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';

describe('BeerDetailsComponent', () => {
  let beerService: BeerService;
  let component: BeerDetailsComponent;
  let http: HttpClient;
  let route: ActivatedRoute;

  beforeEach(() => {
    beerService = new BeerService(http);
    component = new BeerDetailsComponent(beerService, route);
  });
  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
