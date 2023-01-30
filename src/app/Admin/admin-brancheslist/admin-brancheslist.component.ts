import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Branches } from 'src/Models/branches';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';

@Component({
  selector: 'app-admin-brancheslist',
  templateUrl: './admin-brancheslist.component.html',
  styleUrls: ['./admin-brancheslist.component.css']
})
export class AdminBrancheslistComponent implements OnInit{

  branch: Branches[];
  branchsupervisors: User[];
  searchText: string = '';
  addBranchForm: FormGroup;

  constructor(private service:AdminService){}


  ngOnInit(): void {
    this.getbranches();
    this.getUsersforSupervisors();
    this.addBranchForm = new FormGroup({
      branchName: new FormControl('', Validators.required),
      city: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      branchCode: new FormControl('', Validators.required),
      branchAdminId: new FormControl('', Validators.required)
    });
  }
  getbranches(){
    this.service.getBranches().subscribe(src =>{
      this.branch = src;
      console.log(src);
    })
  }
  addBranch() {
    this.service.addBracnh(this.addBranchForm.value).subscribe(
      response => {
        this.getbranches();
        console.log(response);
        console.log("done");
      },
      (error) => {
        console.log(error);
      }
    );
  }
  getUsersforSupervisors(){
    this.service.getUserforbranchSupervisor().subscribe(src =>{
      this.branchsupervisors = src;
      console.log(src);
    })
  }
  onSearchTextEntered(searchValue: string){
    this.searchText = searchValue;
    console.log(this.searchText);
  }
}
