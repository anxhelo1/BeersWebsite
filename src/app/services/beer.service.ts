import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/observable';
import {environment} from 'environments/environment';
import {IBeerService} from './IBeer.service';

@Injectable()
export class BeerService implements IBeerService {

  constructor(protected httpClient: HttpClient) {
  }

  getBeers(search: string = '', order: string = 'name', sort: string = 'ASC'): Observable<any> {
    return this.httpClient
      .get(`${environment.apiUrl}beers?key=${environment.apiKey}&name=${search}&order=${order}&sort=${sort}`);
  }

  getBeerById(id: string): Observable<any> {
    return this.httpClient.get(`${environment.apiUrl}/beer/${id}?key=${environment.apiKey}`);
  }

}
