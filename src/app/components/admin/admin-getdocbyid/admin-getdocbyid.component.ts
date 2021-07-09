import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/entities/doctor';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-admin-getdocbyid',
  templateUrl: './admin-getdocbyid.component.html',
  styleUrls: ['./admin-getdocbyid.component.css']
})
export class AdminGetdocbyidComponent implements OnInit {
    public errormsg: any;
    doctor: Doctor = new Doctor();
    doctorId: number = 0;
    @ViewChild('id') inputId :any;
    constructor(private doctorService: DoctorService, private router: Router) { }
  
    ngOnInit(): void {
      // this.id = this.route.snapshot.params['id'];
      // this.customerService.getCustomerById(this.id).subscribe(data => { console.log(data); this.customer = data },
      //   error => console.log(error));
    }
  
    getDoctorById(value:any){
    
      this.doctorId=value;
      this.doctorService.getDoctorById(this.doctorId).subscribe(data => {  this.doctor = data;console.log(data);
      
    },
        error => this.errormsg=error);
      
      this.inputId.nativeElement.value="";
      
    }
  
}
