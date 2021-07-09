import { Component, Input, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Doctor } from 'src/app/entities/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-update-doctor',
  templateUrl: './update-doctor.component.html',
  styleUrls: ['./update-doctor.component.css']
})
export class UpdateDoctorComponent implements OnInit {

  dataUpdated=false;
  message!:string;
  id:number=0;
  @Input() public parentData:any;
 
  doctor :Doctor=new Doctor;
  constructor(private doctService:DoctorService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['doctorId'];
    this.doctService.getDoctorById(this.id).subscribe(data => {
      this.doctor = data; console.log(data);
    },
    error => console.log(error));
  }

  Onsubmit(){
    
    this.doctService.updateDoctor(this.doctor).subscribe(data=>{ console.log(this.doctor);console.log(data);
      this.dataUpdated=true;
      this.message="Details Updated Successfully! Login again."},
  error=>console.log(error));
  }

}
