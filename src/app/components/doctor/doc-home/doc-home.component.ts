import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Doctor } from 'src/app/entities/doctor';
import { DoctorService } from 'src/app/services/doctor.service';


@Component({
  selector: 'app-doc-home',
  templateUrl: './doc-home.component.html',
  styleUrls: ['./doc-home.component.css']
})
export class DocHomeComponent implements OnInit {
  id!: number;
  emailId!: string
  doctor: Doctor = new Doctor();

  constructor(private doctorServ: DoctorService, private activateRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.emailId = this.activateRoute.snapshot.params['emailId'];
    this.doctorServ.getByEmailId(this.emailId)
      .subscribe(data => {
        console.log(this.emailId);

        this.doctor = data;
        console.log(data);
      },
        error => console.log(error));
  }

  logout() {
    this.router.navigate(['/home'])
  }

  deleteMyAccount(id: number) {
    this.doctorServ.deleteAccount(id).subscribe(
      data => {
        console.log(data),
          alert("Your Account Successfully Deleted"),
          this.router.navigate(['/home'])

      },
      error => console.log(error)

    )

  }
  updateDoctor(doctorId:number){
    this.router.navigate(['doc-upd',doctorId])
  }
  
}


