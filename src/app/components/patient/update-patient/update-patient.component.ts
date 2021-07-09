import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute,Router } from '@angular/router';
import { Patient } from 'src/app/entities/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {
  dataUpdated=false;
  message!:string;
  id:number=0;
  @Input() public parentData:any;
 
  patient :Patient=new Patient;
  constructor(private patientService:PatientService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(data => {
      this.patient = data; console.log(data);
    },
    error => console.log(error));
  }

  Onsubmit(){
    
    this.patientService.updatePatient(this.patient).subscribe(data=>{ console.log(this.patient);console.log(data);
      this.dataUpdated=true;
      this.message="Details Updated Successfully! Login again."},
  error=>console.log(error));
  }

  
}
