import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/entities/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-admin-home',
  templateUrl: './admin-home.component.html',
  styleUrls: ['./admin-home.component.css']
})
export class AdminHomeComponent implements OnInit {

  id!: number;
  emailId!: string
  admin: Admin = new Admin();

  constructor(private admServ: AdminService, private activateRoute: ActivatedRoute,
    private router: Router,) { }

  ngOnInit(): void {
    this.emailId = this.activateRoute.snapshot.params['emailId'];
    this.admServ.getByEmailId(this.emailId)
      .subscribe(data => {
        console.log(this.emailId);

        this.admin = data;
        console.log(data);
      },
        error => console.log(error));
  }

  logout() {
    this.router.navigate(['/home'])
  }

  deleteMyAccount(id: number) {
    this.admServ.deleteAccount(id).subscribe(
      data => {
        console.log(data),
          alert("Your Account Successfully Deleted"),
          this.router.navigate(['/home'])

      },
      error => console.log(error)

    )

  }
  updateAdmin(id:number){
    this.router.navigate(['adm-upd',id])
  }
  

}
