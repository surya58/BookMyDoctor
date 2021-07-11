import { Component, OnInit } from '@angular/core';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-getall-appointment',
  templateUrl: './getall-appointment.component.html',
  styleUrls: ['./getall-appointment.component.css']
})
export class GetallAppointmentComponent implements OnInit {

  appointments : any ;

  constructor(private appointment:AppointmentService) { }

  ngOnInit(): void {
    this.appointment.getAppointmentList().subscribe(data=>this.appointments=data)
  }
}
