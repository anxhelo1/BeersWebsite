import {BeerListComponent} from './beer-list.component';
import {BeerService} from '../../services/beer.service';
import {HttpClientModule} from '@angular/common/http';
import {ComponentFixture, inject, TestBed} from '@angular/core/testing';
import {MockbeerService} from '../../services/Mockbeer.service';
import {FormsModule} from '@angular/forms';
import {RouterModule} from '@angular/router';
import {RouterTestingModule} from '@angular/router/testing';
import {IBeerService} from '../../services/IBeer.service';

describe('BeerListComponent', () => {
  let component: BeerListComponent;
  let fixture: ComponentFixture<BeerListComponent>;
  let testBedService: IBeerService;
  let componentService: IBeerService;
  beforeEach(() => {

    // refine the test module by declaring the test component
    TestBed.configureTestingModule({
      declarations: [BeerListComponent],
      providers: [{provide: IBeerService, useClass: BeerService}],
      imports: [FormsModule, RouterModule, HttpClientModule, RouterTestingModule]
    });

    TestBed.overrideComponent(
      BeerListComponent,
      {set: {providers: [{provide: IBeerService, useClass: MockbeerService}]}}
    );

    fixture = TestBed.createComponent(BeerListComponent);
    component = fixture.componentInstance;
    testBedService = TestBed.get(IBeerService);
    componentService = fixture.debugElement.injector.get(IBeerService);
  });


  it('Service injected via inject(...) and TestBed.get(...) should be the same instance',
    inject([IBeerService], (injectService: IBeerService) => {
      expect(injectService).toBe(testBedService);
    })
  );

  it('Service injected via component should be and instance of MockBeerService', () => {
    expect(componentService instanceof MockbeerService).toBeTruthy();
  });

  it('should have been created', () => {
    expect(component).toBeTruthy();
  });

  it('should call loadBeers', () => {
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    spyOn(component, 'loadBeers');
    app.loadBeers();
    expect(app.loadBeers).toHaveBeenCalled();
  });

  it('should return a list', () => {
    fixture.detectChanges();
    const app = fixture.debugElement.componentInstance;
    spyOn(component, 'loadBeers');
    expect(app.beers.length).toEqual(3);
  });


});
