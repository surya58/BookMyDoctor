import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/entities/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointment-status',
  templateUrl: './appointment-status.component.html',
  styleUrls: ['./appointment-status.component.css']
})
export class AppointmentStatusComponent implements OnInit {

  appointment: Appointment = new Appointment();
  appointmentId: number = 0;
  @ViewChild('id') inputId :any;

  constructor(private appointmentService:AppointmentService, private router : Router, private route: ActivatedRoute) { }

  ngOnInit(): void {

  }

  getAppointmentById(value:any){
  
    this.appointmentId=value;
    this.appointmentService.getAppointmentById(this.appointmentId).subscribe(data => {  this.appointment = data;console.log(data);},
      error => console.log(error));
    
    this.inputId.nativeElement.value="";
    
  }

}
