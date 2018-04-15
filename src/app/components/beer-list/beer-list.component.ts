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

  constructor(private beerService: BeerService) {
    this.beers = [];
  }

  ngOnInit() {
    this.isLoading = true;
    this.beerService.getBeers().subscribe(res => {
      this.beers = res.data.filter(b => b.nameDisplay !== undefined || b.description !== undefined);
      this.isLoading = false;
    });

  }

}
