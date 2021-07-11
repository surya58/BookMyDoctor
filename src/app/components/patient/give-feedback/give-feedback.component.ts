import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/entities/doctor';
import { Feedback } from 'src/app/entities/feedback';
import { Patient } from 'src/app/entities/patient';
import { DoctorService } from 'src/app/services/doctor.service';
import { FeedbackService } from 'src/app/services/feedback.service';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-give-feedback',
  templateUrl: './give-feedback.component.html',
  styleUrls: ['./give-feedback.component.css']
})
export class GiveFeedbackComponent implements OnInit {

  id: number = 0;
  doctorId: number = 1;
  @Input() public parentData: any;
 
  doctor: Doctor = new Doctor;
  patient: Patient = new Patient;
  rating:any;
 
  feedback: Feedback = new Feedback();
  speciality: string = "";
  doctorList: any;
  fbgiven=false;
  message!:string;
 
  constructor(private feedbackService: FeedbackService, private patientService: PatientService, private doctorService: DoctorService, private router: Router, private route: ActivatedRoute) { }
 
  ngOnInit(): void {
 
    this.doctorId = this.route.snapshot.params['doctorId'];
    
    this.doctorService.getDoctorById(this.doctorId).subscribe(data => {
      this.doctor = data; console.log(data);
    }, error => console.log(error));

    this.doctorService.getDoctorList().subscribe(data=>{this.doctorList=data});

    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data; console.log(data);
    },
      error => console.log(error));
 
  }
  saveFeedback(comments:string){
    console.log(this.speciality);
    this.doctorService.getDoctorSpeciality(this.speciality).subscribe(data=>{console.log(data);this.doctor=data; this.feedback.patient=this.patient;
      this.feedback.doctor=data;
      console.log(this.feedback);
      console.log(this.doctor)
      this.feedbackService.createFeedback(comments,this.rating,data.doctorId,this.id).subscribe(body=>{console.log(body)},error =>console.log(error));
      
    
 
    },error => console.log(error));
    this.fbgiven=true;
      this.message="Feedback given successfully!"
    
    console.log(this.doctor)
 
  
  }
 
  Onsubmit(value: string,comments:string) {
    this.speciality = value;
    this.saveFeedback(comments);
  }
 
  

}
