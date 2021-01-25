import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CommonComponentsModule } from './components/common/common-components.module';
import { LayoutComponentsModule } from './components/layout/layout-components.module';
import { FilmComponent } from './pages/film/film.component';
import { PlanetsComponent } from './pages/planets/planets.component';

@NgModule({
  declarations: [
    AppComponent,
    PlanetsComponent,
    FilmComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    LayoutComponentsModule,
    CommonComponentsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
