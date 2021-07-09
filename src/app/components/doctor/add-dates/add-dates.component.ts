import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { AvailabilityDates } from 'src/app/entities/availability-dates';
import { Doctor } from 'src/app/entities/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-add-dates',
  templateUrl: './add-dates.component.html',
  styleUrls: ['./add-dates.component.css']
})
export class AddDatesComponent implements OnInit {
  dataSaved=false;
  message!:string;
  doctorId:number=0;
  doctor: Doctor= new Doctor();
  //doctors:any;
  availabilitydates:AvailabilityDates=new AvailabilityDates()
  constructor(private doctorService: DoctorService, private router: Router,private route:ActivatedRoute) { }
 
  ngOnInit(): void {
    this.doctorId = this.route.snapshot.params['doctorId'];
       this.doctorService.getDoctorById(this.doctorId).subscribe(data => {
         this.doctor = data; console.log(data);
       },
       error => console.log(error));
  }
 
  onSubmit() {
    this.saveDoctorAvailability();
  }
 
  saveDoctorAvailability(){
    this.availabilitydates.doctor=this.doctor;
    this.doctorService.createDoctorAvailabillity(this.availabilitydates).subscribe( data => {console.log(data);}, error => console.log(error));
    this.dataSaved=true;
    this.message='Dates added successfully!'
  }
 
  
}
