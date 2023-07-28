import { Component } from '@angular/core';
import { NewsapiservicesService } from '../service/newsapiservices.service';

@Component({
  selector: 'app-health',
  templateUrl: './health.component.html',
  styleUrls: ['./health.component.css']
})
export class HealthComponent {
  constructor(private services: NewsapiservicesService) {}
  healthNewsDisplay: any = [];
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.services.healthNews().subscribe((result) => {
      this.healthNewsDisplay = result.articles;
    });
  }

}
