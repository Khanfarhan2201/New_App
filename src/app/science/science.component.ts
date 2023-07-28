import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-science',
  templateUrl: './science.component.html',
  styleUrls: ['./science.component.css']
})
export class ScienceComponent {
  constructor(private services:NewsapiservicesService) {}
scienceNewsDisplay:any =[];


ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.
  this.services.scienceNews().subscribe((result)=>{
    this.scienceNewsDisplay = result.articles;

  });
}

}
