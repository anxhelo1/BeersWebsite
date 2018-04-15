import {Component, OnInit} from '@angular/core';
import {BeerService} from '../../services/beer.service';
import {Beer} from '../../models/Beer';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-beer-details',
  templateUrl: './beer-details.component.html',
  styleUrls: ['./beer-details.component.css'],
  providers: [BeerService]
})
export class BeerDetailsComponent implements OnInit {

  public beerId: string;
  public isLoading: boolean;
  public hasError: boolean;
  public beer: Beer;

  constructor(private beerService: BeerService, private activeRoute: ActivatedRoute) {
  }

  ngOnInit() {
    this.loadBeer();
  }

  loadBeer(): void {
    this.isLoading = true;
    this.hasError = false;
    this.activeRoute.params.subscribe(params => {
      this.beerId = params['id'];
      this.beerService.getBeerById(this.beerId).subscribe(res => {
        this.beer = res.data;
        console.log(this.beer);
        this.isLoading = false;
      })
    }, error => {
      console.log(error);
      this.hasError = true;
      this.isLoading = false;
    });
  }
}
