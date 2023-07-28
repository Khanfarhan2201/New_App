import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TopHeadingComponent } from './top-heading/top-heading.component';
import { TechnewsComponent } from './technews/technews.component';
import { SportsComponent } from './sports/sports.component';
import {BusinessComponent} from './business/business.component';
import {ScienceComponent} from './science/science.component';
import {EntertainmentComponent} from './entertainment/entertainment.component';
import {HealthComponent} from './health/health.component';
import {GeneralComponent} from './general/general.component';

const routes: Routes = [
  {path:'',component:TopHeadingComponent},
  {path:'tech',component:TechnewsComponent},
  {path:'sportNews',component:SportsComponent},
  {path:'businessNews',component:BusinessComponent},
  {path:'scienceNews',component:ScienceComponent},
  {path:'entertainmentNews',component:EntertainmentComponent},
  {path:'healthNews',component:HealthComponent},
  {path:'generalNews',component:GeneralComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
