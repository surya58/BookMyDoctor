import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-get-appointment',
  templateUrl: './get-appointment.component.html',
  styleUrls: ['./get-appointment.component.css']
})
export class GetAppointmentComponent implements OnInit {
  

  @ViewChild('doctorId') inputId :any;


  appointments : any ;
  //value:any;
  doctorId: number=0;

  // @ViewChild('id') inputId :any;
  constructor(private appointment:AppointmentService,private router: Router, private route: ActivatedRoute) { }

  
  
    

 
  
  
  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['doctorId'];
    this.appointment.getAppointmentListByDoctor(this.doctorId).subscribe(data=>{this.appointments=data;console.log(data);},
    error=>console.log(error));
    this.inputId.nativeElement.value="";
  }
  
  upd(appointmentId:number){
    this.router.navigate(['upd-app',appointmentId])
  }

}
