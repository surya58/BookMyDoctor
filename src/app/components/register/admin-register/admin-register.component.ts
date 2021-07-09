import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Admin } from 'src/app/entities/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-register',
  templateUrl: './admin-register.component.html',
  styleUrls: ['./admin-register.component.css']
})
export class AdminRegisterComponent implements OnInit {

  regForm!:FormGroup;
  dataSaved=false;
  message!:string;
  
  constructor(private admService: AdminService, private router: Router, private formBuild:FormBuilder) { }

  ngOnInit(){
    this.setFormState();
  }
  setFormState():void{
    this.regForm=this.formBuild.group({
    adminName:['',[Validators.required]],
    contactNumber:['',[Validators.required]],
    emailId: ['',[Validators.required]],
    password:['',[Validators.required]]
    })
  }
  onSubmit() {
    let admin = this.regForm.value;

    this.createAdmin(admin);
    this.regForm.reset();
  }
  createAdmin(admin: Admin) {
    this.admService.createAdmin(admin).subscribe(
      () => {
        this.dataSaved = true;
        this.message = "Registered successfully!";
       this.regForm.reset();
      }
    )
  }

}
