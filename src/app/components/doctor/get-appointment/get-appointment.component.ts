import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-get-appointment',
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.css']
})
export class GetAppointmentComponent implements OnInit {
  appointments : any ;

  doctorId: number = 1;

  // @ViewChild('id') inputId :any;
  constructor(private appointment:AppointmentService,private router: Router, private route: ActivatedRoute) { }

  getAppointmentListByDoctor()
  {
    this.appointment.getAppointmentListByDoctor(this.doctorId).subscribe(data=>this.appointments=data)
  }

  ngOnInit(): void {
    // this.appointment.getAppointmentListByDoctor(this.doctorId).subscribe(data=>this.appointments=data)
  }


}
