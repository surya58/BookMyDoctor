import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Doctor } from 'src/app/entities/doctor';
import { Login } from 'src/app/entities/login';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-doctor-login',
  templateUrl: './doctor-login.component.html',
  styleUrls: ['./doctor-login.component.css']
})
export class DoctorLoginComponent implements OnInit {

  loginData = new Login();
  // @Output() isLoginSuccessfull=false;
  message = '';
  doctorData = new Doctor();
  constructor(private doctorService:DoctorService,
    private router:Router) { }

  ngOnInit(): void {
    
  }
  loginUser() {
    this.doctorService.loginUserFromRemote(this.loginData).subscribe(
      data => {
        console.log("response recieved");
        console.log(this.doctorData);

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
    this.router.navigate([`/doc-home`,emailId])

  }

}
