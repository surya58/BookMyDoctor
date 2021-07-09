import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Patient } from 'src/app/entities/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-register',
  templateUrl: './patient-register.component.html',
  styleUrls: ['./patient-register.component.css']
})
export class PatientRegisterComponent implements OnInit {

  regForm!:FormGroup;
  dataSaved=false;
  message!:string;
  
  constructor(private patientService: PatientService, private router: Router, private formBuild:FormBuilder) { }

  ngOnInit(){
    this.setFormState();
  }
  setFormState():void{
    this.regForm=this.formBuild.group({
    patientName:['',[Validators.required]],
    mobileNo:['',[Validators.required]],
    bloodGroup:['',[Validators.required]],
    emailId: ['',[Validators.required]],
    gender:['',[Validators.required]],
    age:['',[Validators.required]],
    password:['',[Validators.required]],
    address:['',[Validators.required]]
    })
  }
  onSubmit() {
    let patient = this.regForm.value;

    this.createPatient(patient);
    this.regForm.reset();
  }
  createPatient(patient: Patient) {
    this.patientService.createPatient(patient).subscribe(
      () => {
        this.dataSaved = true;
        this.message = "Registered successfully!";
       this.regForm.reset();
      }
    )
  }
  
}
