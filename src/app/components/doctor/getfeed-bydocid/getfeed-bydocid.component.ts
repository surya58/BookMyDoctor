import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FeedbackService } from 'src/app/services/feedback.service';

@Component({
  selector: 'app-getfeed-bydocid',
  templateUrl: './getfeed-bydocid.component.html',
  styleUrls: ['./getfeed-bydocid.component.css']
})
export class GetfeedBydocidComponent implements OnInit {
  feedbacks: any ;
   

    doctorId: number =2;
   
    // @ViewChild('id') inputId :any;
    constructor(private feedback:FeedbackService,private router: Router, private route: ActivatedRoute) { }
   
    getFeedbackListByDoctor()
    {
      this.feedback.getFeedbackListByDoctor(this.doctorId).subscribe(data=>this.feedbacks=data)
    }
   
    ngOnInit(): void {
      // this.appointment.getAppointmentListByDoctor(this.doctorId).subscribe(data=>this.appointments=data)
    }
}
