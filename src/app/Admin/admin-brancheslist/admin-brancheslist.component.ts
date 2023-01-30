import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Branches } from 'src/Models/branches';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-brancheslist',
  templateUrl: './admin-brancheslist.component.html',
  styleUrls: ['./admin-brancheslist.component.css']
})
export class AdminBrancheslistComponent implements OnInit{

  branch: Branches[];

  constructor(private service:AdminService){}
  addbranchForm: FormGroup;
  showSearch = false;

  ngOnInit(): void {
    this.getbranches();
    this.addbranchForm = new FormGroup({
      branchName: new FormControl(''),
      city: new FormControl(''),
      address: new FormControl(''),
      branchCode: new FormControl(''),
      branchAdminId: new FormControl('')
    });
  }
  getbranches(){
    this.service.getBranches().subscribe(src =>{
      this.branch = src;
      console.log(src);
    })
  }
  addBranch() {
    this.service.addBracnh(this.addbranchForm.value).subscribe(
      (response) => {
        console.log(response);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  toggleSearch() {
    this.showSearch = !this.showSearch;
  }
}
