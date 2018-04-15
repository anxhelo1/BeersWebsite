import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';

@Injectable()
export class BeerService {

  constructor(private httpClient: HttpClient) {
  }

  getBeers(): Observable<any> {
    return this.httpClient.get('http://api.brewerydb.com/v2/beers?key=ee8a1a84bc76fd7d7ae6dd0dc45583e3');
  }

  getBeerById(id: string): Observable<any> {
    return this.httpClient.get(`http://api.brewerydb.com/v2/beer/${id}?key=ee8a1a84bc76fd7d7ae6dd0dc45583e3`);
  }

}
