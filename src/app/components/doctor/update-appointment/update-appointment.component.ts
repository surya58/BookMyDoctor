import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Appointment } from 'src/app/entities/appointment';
import { AppointmentService } from 'src/app/services/appointment.service';
import { DoctorService } from 'src/app/services/doctor.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-appointment',
  templateUrl: './update-appointment.component.html',
  styleUrls: ['./update-appointment.component.css']
})
export class UpdateAppointmentComponent implements OnInit {

  appointmentId:number = 0;
  appointment:Appointment = new Appointment;
  appointmentDate:Date=new Date();
  // appointmentStatus:string=""
  dataUpdated=false;
  message!:string;

  constructor(private appointmentService: AppointmentService ,private doctorService: DoctorService, private patientService: PatientService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.appointmentId = this.route.snapshot.params['appointmentId'];
    console.log(this.route.snapshot.params['appointmentId']);
    this.appointmentService.getAppointmentById(this.appointmentId).subscribe(data => { this.appointment = data; },
      error => console.log(error));
    }

      onSubmit(){
      this.appointmentService.updateAppointment(this.appointment).subscribe(data=>{this.appointment=data;console.log(data);}, error => alert(error.error.text));
      this.dataUpdated=true;
      this.message="Appointment status updated!"
      
   }
 

}
