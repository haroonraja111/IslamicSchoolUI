import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminBrancheslistComponent } from './Admin/admin-brancheslist/admin-brancheslist.component';
import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { RoleManagmentComponent } from './Admin/role-managment/role-managment.component';
import { SignupComponent } from './signup/signup.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  {path:'welcome', component:WelcomeComponent},
  {path:'',redirectTo:'welcome',pathMatch:'full'},
  {path:'signup', component:SignupComponent},
  {path:'admin-panel',component:AdminPanelComponent},
  {path:'role-managment', component:RoleManagmentComponent},
  {path:'admin-brancheslist', component:AdminBrancheslistComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
