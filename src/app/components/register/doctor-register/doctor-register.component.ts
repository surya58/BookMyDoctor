import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/entities/doctor';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-doctor-register',
  templateUrl: './doctor-register.component.html',
  styleUrls: ['./doctor-register.component.css']
})
export class DoctorRegisterComponent implements OnInit {

  regForm!:FormGroup;
  dataSaved=false;
  message!:string;
  
  constructor(private doctorService: DoctorService, private router: Router, private formBuild:FormBuilder) { }

  ngOnInit(){
    this.setFormState();
  }
  setFormState():void{
    this.regForm=this.formBuild.group({
    doctorName:['',[Validators.required]],
    speciality:['',[Validators.required]],
    hospitalName:['',[Validators.required]],
    emailId: ['',[Validators.required]],
    location:['',[Validators.required]],
    mobileNo:['',[Validators.required]],
    password:['',[Validators.required]],
    chargedPerVisit:['',[Validators.required]]
    })
  }
  onSubmit() {
    let doctor = this.regForm.value;

    this.createDoctor(doctor);
    this.regForm.reset();
  }
  createDoctor(doctor: Doctor) {
    this.doctorService.createDoctor(doctor).subscribe(
      () => {
        this.dataSaved = true;
        this.message = "Registered successfully!";
       this.regForm.reset();
      }
    )
  }
  

}
