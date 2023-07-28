import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';
@Component({
  selector: 'app-technews',
  templateUrl: './technews.component.html',
  styleUrls: ['./technews.component.css']
})
export class TechnewsComponent {
  constructor(private services:NewsapiservicesService) {}
technewsDisplay:any =[];
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.services.techNews().subscribe((result)=>{
    this.technewsDisplay = result.articles;

  });
}

}

