import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Admin } from 'src/app/entities/admin';
import { Login } from 'src/app/entities/login';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent implements OnInit {

  loginData = new Login();
  // @Output() isLoginSuccessfull=false;
  message = '';
  admData = new Admin();
  constructor(private admService:AdminService,
    private router:Router) { }

  ngOnInit(): void {
    
  }
  loginUser() {
    this.admService.loginUserFromRemote(this.loginData).subscribe(
      data => {
        console.log("response recieved");
        console.log(this.admData);

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
    this.router.navigate([`/adm-home`,emailId])

  }


}
