import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/entities/login';
import { Patient } from 'src/app/entities/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-login',
  templateUrl: './patient-login.component.html',
  styleUrls: ['./patient-login.component.css']
})
export class PatientLoginComponent implements OnInit {

  loginData = new Login();
  // @Output() isLoginSuccessfull=false;
  message = '';
  patData = new Patient();
  constructor(private patService:PatientService,
    private router:Router) { }

  ngOnInit(): void {
    
  }
  loginUser() {
    this.patService.loginUserFromRemote(this.loginData).subscribe(
      data => {
        console.log("response recieved");
        console.log(this.patData);

        //  this.isLoginSuccessfull=true;
       
        this.userDetails(this.loginData.emailId);
        // this.router.navigate(['/user-services']);
      },
      error => {
        console.log("exception occured");
        //this.message = error.error;
          this.message="BAD Credentials, please enter valid emailId and password"
      }
    );
  }
  userDetails(emailId: String) {
    this.router.navigate([`/pat-home`,emailId])

  }

}
