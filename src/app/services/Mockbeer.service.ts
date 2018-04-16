import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import {BeerService} from './beer.service';
import {Beer} from '../models/Beer';
import {IBeerService} from './IBeer.service';

@Injectable()
export class MockbeerService implements IBeerService {

  protected data: Beer[];

  constructor() {
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
