import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.css']
})
export class GeneralComponent {
  constructor(private services: NewsapiservicesService) {}
  generalNewsDisplay: any = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.services.generalNews().subscribe((result) => {
      this.generalNewsDisplay = result.articles;
    });
  }

}
