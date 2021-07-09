import { Component, OnInit } from '@angular/core';
import { Doctor } from 'src/app/entities/doctor';
import { DoctorService } from 'src/app/services/doctor.service';

@Component({
  selector: 'app-admin-getalldoc',
  templateUrl: './admin-getalldoc.component.html',
  styleUrls: ['./admin-getalldoc.component.css']
})
export class AdminGetalldocComponent implements OnInit {
 docDeleted=false;
 message!:string;
  doctors!:Doctor[];
  constructor(private doctorService:DoctorService) { }

  ngOnInit(): void {
    this.listOfDoc();
  }
  listOfDoc(){
    this.doctorService.getDoctorList().subscribe(
      data=>{
        this.doctors=data,console.log(data)
      }
    );
  }
 
  deleteDoctor(doctorId: number) {
    this.doctorService.deleteDoctor(doctorId).subscribe(data => {console.log(data); this.listOfDoc(); this.docDeleted=true; this.message="Doctor deleted successfully"}, 
    error=> console.log(error));
  }
}