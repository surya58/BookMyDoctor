import { Component, OnInit, ViewChild } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/entities/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doc-speciality',
  templateUrl: './doc-speciality.component.html',
  styleUrls: ['./doc-speciality.component.css']
})
export class DocSpecialityComponent implements OnInit {
  public errormsg: any;
  speciality: string="";
  // value:any;
  // doctor:any;
  // doctor:Doctor =new Doctor;
  doctor : Doctor[] = [];

  // doctors:any;
  @ViewChild('speciality') inputId :any;

  constructor(private doctorService: DoctorService, private router:Router, private route:ActivatedRoute) { }

  ngOnInit(): void {
  }

  getDoctorSpeciality(value:any){
    // getDoctorSpeciality(){
   this.speciality=value;
    //this.value = speciality;
    this.doctorService.getDoctorSpeciality(this.speciality).subscribe(data => {  this.doctor = data;console.log(data);},
      error => this.errormsg=error);
    
   this.inputId.nativeElement.value="";



  }


}
