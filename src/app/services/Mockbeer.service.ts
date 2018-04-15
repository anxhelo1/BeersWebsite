import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BeerService} from './beer.service';
import {Beer} from '../models/Beer';

@Injectable()
export class MockbeerService extends BeerService {

  protected data: Beer[];

  constructor(protected httpClient: HttpClient) {
    super(httpClient);
    this.data = [
      {
        id: 'id1',
        name: 'beer1',
        description: 'desc1',
        nameDisplay: '',
        category: {name: '', description: ''},
        glass: {createDate: '', name: ''},
        isOrganic: 'Y',
        labels: {icon: '', large: '', medium: ''},
        statusDisplay: '',
        style: {createDate: '', description: '', name: '', updateDate: ''}
      },
      {
        id: 'id1',
        name: 'beer1',
        description: 'desc1',
        nameDisplay: '',
        category: {name: '', description: ''},
        glass: {createDate: '', name: ''},
        isOrganic: 'Y',
        labels: {icon: '', large: '', medium: ''},
        statusDisplay: '',
        style: {createDate: '', description: '', name: '', updateDate: ''}
      },
      {
        id: 'id1',
        name: 'beer1',
        description: 'desc1',
        nameDisplay: '',
        category: {name: '', description: ''},
        glass: {createDate: '', name: ''},
        isOrganic: 'Y',
        labels: {icon: '', large: '', medium: ''},
        statusDisplay: '',
        style: {createDate: '', description: '', name: '', updateDate: ''}
      }
    ]
  }

  getBeers(search: string = '', order: string = 'name', sort: string = 'ASC'): Observable<any> {
    return Observable.of({data: this.data});
  }

  getBeerById(id: string): Observable<any> {
    return Observable.of(this.data);
  }
}
