import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { finalize, pluck, tap } from 'rxjs/operators';
import { IPlanet } from './models/i-planet';
import { PlanetsService } from './services/planets.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  public loading = true;
  public planets$: Observable<IPlanet[]>;

  constructor(
    private planetsService: PlanetsService
  ) {}

  ngOnInit() {
    this.planets$ = this.planetsService.getPlanets()
    .pipe(
      pluck('results'),
      tap(console.log),
      finalize(() => {
        this.loading = false;
      })
    )
  }
}
