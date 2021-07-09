import { Component, OnInit } from '@angular/core';
import { Patient } from 'src/app/entities/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-admin-getpatall',
  templateUrl: './admin-getpatall.component.html',
  styleUrls: ['./admin-getpatall.component.css']
})
export class AdminGetpatallComponent implements OnInit {
  patDeleted=false;
  message!:string;
 patients!:Patient[];
  constructor(private patientService: PatientService) { }

  ngOnInit(): void {
    this.listOfPat()
  }
  listOfPat(){
    this.patientService.getPatientList().subscribe(
      data=>{
        this.patients=data,console.log(data)
      }
    );
  }
 
  deletePatient(id: number) {
    this.patientService.deletePatient(id).subscribe(data => {console.log(data); this.listOfPat(); this.patDeleted=true; this.message="Patient deleted successfully"}, 
    error=> console.log(error));
  }

}
