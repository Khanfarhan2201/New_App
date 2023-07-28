import { Component } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service'

@Component({
  selector: 'app-sports',
  templateUrl: './sports.component.html',
  styleUrls: ['./sports.component.css']
})
export class SportsComponent {
  constructor(private services:NewsapiservicesService) {}

  sportNewsDisplay:any = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.services.sportsNews().subscribe((result)=>{
      this.sportNewsDisplay = result.articles;
    })
  }

}
