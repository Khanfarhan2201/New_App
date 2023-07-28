import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import {HttpClientModule} from '@angular/common/http';
import {NewsapiservicesService} from './service/newsapiservices.service';
import { TechnewsComponent } from './technews/technews.component';
// for HttpClient import:
import { LoadingBarHttpClientModule } from '@ngx-loading-bar/http-client';
import { SportsComponent } from './sports/sports.component';
import { BusinessComponent } from './business/business.component';
import { FooterComponent } from './footer/footer.component';
import { ScienceComponent } from './science/science.component';
import { EntertainmentComponent } from './entertainment/entertainment.component';
import { HealthComponent } from './health/health.component';
import { GeneralComponent } from './general/general.component';
import { CrouselComponent } from './crousel/crousel.component';

@NgModule({
  declarations: [
    AppComponent,
    TopHeadingComponent,
    TechnewsComponent,
    SportsComponent,
    BusinessComponent,
    FooterComponent,
    ScienceComponent,
    EntertainmentComponent,
    HealthComponent,
    GeneralComponent,
    CrouselComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    LoadingBarHttpClientModule
  ],
  providers: [NewsapiservicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
