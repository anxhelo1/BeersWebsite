import {Component, OnInit} from '@angular/core';
import {BeerService} from '../../services/beer.service';
import {Beer} from '../../models/Beer';

@Component({
  selector: 'app-beer-list',
  templateUrl: './beer-list.component.html',
  styleUrls: ['./beer-list.component.css'],
  providers: [BeerService]
})
export class BeerListComponent implements OnInit {

  public beers: Beer[];
  public isLoading: boolean;
  public searchTerm: string;
  public order: string;
  public sort: string;

  constructor(private beerService: BeerService) {
    this.beers = [];
    this.searchTerm = '';
    this.order = 'name';
    this.sort = 'ASC';
  }

  loadBeers() {
    this.isLoading = true;
    this.beerService.getBeers(this.searchTerm, this.order, this.sort).subscribe(res => {
      this.beers = res.data === undefined ? []
        : res.data.filter(b => b.nameDisplay !== undefined || b.description !== undefined);
      this.isLoading = false;
    });
  }

  ngOnInit() {
    this.loadBeers();
  }

  onSearchClick() {
    this.loadBeers();
  }
}
