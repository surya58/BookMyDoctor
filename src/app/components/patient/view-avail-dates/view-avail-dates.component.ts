import { Component, OnInit } from '@angular/core';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-view-avail-dates',
  templateUrl: './view-avail-dates.component.html',
  styleUrls: ['./view-avail-dates.component.css']
})
export class ViewAvailDatesComponent implements OnInit {

  availabilityDate:any
  // availabilityDates:AvailabilityDates= new AvailabilityDates;

  constructor(private availabilityDates:PatientService ) { }

  ngOnInit(): void {

    this.availabilityDates.getAvailDateList().subscribe(data=>this.availabilityDate=data)

  }

}
