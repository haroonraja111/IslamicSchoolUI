import { Component, OnInit } from '@angular/core';
import { Branches } from 'src/Models/branches';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-brancheslist',
  templateUrl: './admin-brancheslist.component.html',
  styleUrls: ['./admin-brancheslist.component.css']
})
export class AdminBrancheslistComponent implements OnInit{

  branch: Branches;

  constructor(private service:AdminService){}

  ngOnInit(): void {
    this.getbranches();
  }
  getbranches(){
    this.service.getBranches().subscribe(src =>{
      this.branch = src;
      console.log(src);
    })
  }

}
