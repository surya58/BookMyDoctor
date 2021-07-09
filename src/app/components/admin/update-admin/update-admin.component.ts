import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Admin } from 'src/app/entities/admin';
import { AdminService } from 'src/app/services/admin.service';

@Component({
  selector: 'app-update-admin',
  templateUrl: './update-admin.component.html',
  styleUrls: ['./update-admin.component.css']
})
export class UpdateAdminComponent implements OnInit {

  dataUpdated=false;
  message!:string;
  id:number=0;
  @Input() public parentData:any;
 
  admin :Admin=new Admin;
  constructor(private admService:AdminService, private router:Router,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.admService.getAdminById(this.id).subscribe(data => {
      this.admin = data; console.log(data);
    },
    error => console.log(error));
  }

  Onsubmit(){
    
    this.admService.updateAdmin(this.admin).subscribe(data=>{ console.log(this.admin);console.log(data);
      this.dataUpdated=true;
      this.message="Details Updated Successfully! Login again."},
  error=>console.log(error));
  }


}
