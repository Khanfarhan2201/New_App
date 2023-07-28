import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-entertainment',
  templateUrl: './entertainment.component.html',
  styleUrls: ['./entertainment.component.css'],
})
export class EntertainmentComponent {
  constructor(private services: NewsapiservicesService) {}
  entertainmentNewsDisplay: any = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.services.entertainmentNews().subscribe((result) => {
      this.entertainmentNewsDisplay = result.articles;
    });
  }
}
