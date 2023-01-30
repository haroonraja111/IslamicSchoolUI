import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { SignupComponent } from './signup/signup.component';
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome'
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { AdminPanelComponent } from './Admin/admin-panel/admin-panel.component';
import { RoleManagmentComponent } from './Admin/role-managment/role-managment.component';
import { ModalModule } from 'ngx-bootstrap/modal';
import { RoleModalComponent } from './Admin/role-modal/role-modal.component';
import { AdminBrancheslistComponent } from './Admin/admin-brancheslist/admin-brancheslist.component';
import { WaitingComponent } from './waiting/waiting.component';
import { SupervisorPanelComponent } from './supervisor/supervisor-panel/supervisor-panel.component';
import { TeacherPanelComponent } from './teacher/teacher-panel/teacher-panel.component';
import { RoleGuard } from 'src/guards/role.guard';
import { SearchComponent } from './search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    SignupComponent,
    AdminPanelComponent,
    RoleManagmentComponent,
    RoleModalComponent,
    AdminBrancheslistComponent,
    WaitingComponent,
    SupervisorPanelComponent,
    TeacherPanelComponent,
    SearchComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    FontAwesomeModule,
    ModalModule.forRoot()
  ],
  providers: [
    { provide: FaIconLibrary, useValue: faBinoculars },
    RoleGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
