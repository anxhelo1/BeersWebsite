import {Component, OnInit} from '@angular/core';
import {BeerService} from '../../services/beer.service';
import {Beer} from '../../models/Beer';
import {IBeerService} from '../../services/IBeer.service';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  providers: [
    {provide: IBeerService, useClass: BeerService}
  ]
})
export class BeerListComponent implements OnInit {

  public beers: Beer[];
  public isLoading: boolean;
  public searchTerm: string;
  public order: string;
  public sort: string;
  public hasError: boolean;

  constructor(private beerService: IBeerService) {
    this.beers = [];
    this.hasError = false;
    this.searchTerm = '';
    this.order = 'name';
    this.sort = 'ASC';
  }

  loadBeers() {
    this.isLoading = true;
    this.hasError = false;
    this.beerService.getBeers(this.searchTerm, this.order, this.sort).subscribe(res => {
        this.beers = res.data === undefined ? []
          : res.data.filter(b => b.nameDisplay !== undefined || b.description !== undefined);
        this.isLoading = false;
      },
      (error) => {
        console.log(error);
        this.hasError = true;
      }
    );
  }

  ngOnInit() {
    this.loadBeers();
  }

  onSearchClick() {
    this.loadBeers();
  }
}
