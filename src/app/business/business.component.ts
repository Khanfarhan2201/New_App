import { Component } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-business',
  templateUrl: './business.component.html',
  styleUrls: ['./business.component.css']
})
export class BusinessComponent {
  constructor(private services:NewsapiservicesService) {}
  businessNewsDisplay:any = [];

  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.services.businessNews().subscribe((result)=>{
      this.businessNewsDisplay = result.articles;
    })
  }

}
