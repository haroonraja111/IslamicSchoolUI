import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BsModalRef, BsModalService } from 'ngx-bootstrap/modal';
import { User } from 'src/Models/user';
import { AdminService } from 'src/Services/admin.service';
import { RoleModalComponent } from '../role-modal/role-modal.component';

@Component({
  selector: 'app-role-managment',
  templateUrl: './role-managment.component.html',
  styleUrls: ['./role-managment.component.css']
})
export class RoleManagmentComponent implements OnInit {
  users: Partial<User[]>;
  bsModalRef!: BsModalRef;

  constructor(private router: Router, private adminService: AdminService, private modalService: BsModalService){}

  ngOnInit(): void {
    this.getUsersWithRoles();
  }

  getUsersWithRoles(){
    this.adminService.getUserWithRoles().subscribe(users =>{
      this.users = users;
      console.warn(users);
    })
  }
  openRolesModal(user: User){
    const config = {
      class: 'model-dialog-centered',
      initialState: {
        user,
        roles: this.getRolesArray(user)
      }
    }
    this.bsModalRef = this.modalService.show(RoleModalComponent, config);
    this.bsModalRef.content.updateSelectedRoles.subscribe((values: any) =>{
      const rolesToUpdate = {
        roles: [...values.filter((el: { checked: boolean; }) => el.checked === true).map((el: { name: any; }) => el.name)]
      };
      if (rolesToUpdate) {
        this.adminService.updateUserRoles(user.userName,rolesToUpdate.roles).subscribe(() =>{
          user.roles = [...rolesToUpdate.roles]
        })
      }
    })

  }
  private getRolesArray(user: User){
    const roles: any[] = [];
    const userRoles = user.roles;
    const availableRoles: any[] = [
      {name:'DEAN', value:'DEAN'},
      {name:'ADMIN', value:'ADMIN'},
      {name:'TEACHER', value:'TEACHER'},
      {name:'NEWENTRY', value:'NEWENTRY'}
    ];

    availableRoles.forEach(role =>{
      let isMatch = false;
      for (const userRole of userRoles){
        if(role.name === userRole){
          isMatch = true;
          role.checked = true;
          roles.push(role);
          break;
        }
      }
      if(!isMatch) {
        role.checked = false;
        roles.push(role);
      }
    })
    return roles;
  }
  onBack(){
    this.router.navigate(['admin-panel']);
  }

}
