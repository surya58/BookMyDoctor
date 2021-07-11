import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Feedback } from 'src/app/entities/feedback';
import { DoctorService } from 'src/app/services/doctor.service';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-getallfeedback',
  templateUrl: './getallfeedback.component.html',
  styleUrls: ['./getallfeedback.component.css']
})
export class GetallfeedbackComponent implements OnInit {

  feedbacks!: Feedback[]; 
  // doctors: Doctor[] | undefined;
 
  constructor(private feedbackservice: FeedbackService,private doctorService: DoctorService, private router: Router) { }
 
  ngOnInit(): void {
    this.getFeedbacks();
  }
  private getFeedbacks() {
    this.feedbackservice.getFeedbackList().subscribe(data => { this.feedbacks = data, console.log(data)});
  }
  
  
}
