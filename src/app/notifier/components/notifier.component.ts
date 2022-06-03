import { Component, OnInit } from '@angular/core';
import { MbtaApiService } from '../services/mbta-api.service'

@Component({
  selector: 'app-notifier',
  templateUrl: './notifier.component.html',
  styleUrls: ['./notifier.component.scss']
})
export class NotifierComponent implements OnInit {

  constructor(private apiService: MbtaApiService) { }

  ngOnInit(): void {
    const stopId = 'WML-0035'; // Boston Landing - Commuter Rail

    this.apiService.getSchedule(stopId).subscribe((result) => {
      console.log(result);
    })
  }

}
