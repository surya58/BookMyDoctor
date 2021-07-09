import { Component, OnInit } from '@angular/core';
import { Router,ActivatedRoute } from '@angular/router';
import { Patient } from 'src/app/entities/patient';
import { PatientService } from 'src/app/services/patient.service';

@Component({
  selector: 'app-patient-home',
  templateUrl: './patient-home.component.html',
  styleUrls: ['./patient-home.component.css']
})
export class PatientHomeComponent implements OnInit {

  id!: number;
  emailId!: string
  patient: Patient = new Patient();

  constructor(private patServ: PatientService, private activateRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.emailId = this.activateRoute.snapshot.params['emailId'];
    this.patServ.getByEmailId(this.emailId)
      .subscribe(data => {
        console.log(this.emailId);

        this.patient = data;
        console.log(data);
      },
        error => console.log(error));
  }

  logout() {
    this.router.navigate(['/home'])
  }

  deleteMyAccount(id: number) {
    this.patServ.deleteAccount(id).subscribe(
      data => {
        console.log(data),
          alert("Your Account Successfully Deleted"),
          this.router.navigate(['/home'])

      },
      error => console.log(error)

    )

  }
  updatePatient(id:number){
    this.router.navigate(['pat-upd',id])
  }
  

}
