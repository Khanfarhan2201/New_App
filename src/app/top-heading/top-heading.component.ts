import { Component } from '@angular/core';
import {NewsapiservicesService} from '../service/newsapiservices.service';

@Component({
  selector: 'app-top-heading',
  templateUrl: './top-heading.component.html',
  styleUrls: ['./top-heading.component.css']
})
export class TopHeadingComponent {

  constructor(private service:NewsapiservicesService) {}

  topHeadingDisplay:any[] | undefined;


  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.service.topHeading().subscribe((result)=>{
      console.log(result);
      this.topHeadingDisplay = result.articles;
    })
  }
}
