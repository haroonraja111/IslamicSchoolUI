import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { faBinoculars } from '@fortawesome/free-solid-svg-icons';
import { User } from 'src/Models/user';
import { AccountService } from 'src/Services/account.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {
  loginMode = false;
  registerMode = false;
  user!: User;
  errorMessage!: string;

  constructor(private accountsService: AccountService, private router: Router) { }
  model: any = {};

  ngOnInit(): void {
  }
  onLogin(){
    this.accountsService.login(this.model).subscribe(()=>{});
    const roles = localStorage.getItem('roles');
    if(roles?.includes('DEAN')){
      this.router.navigate(['dean']);
    }else if(roles?.includes('ADMIN')){
      this.router.navigate(['admin']);
    }else if(roles?.includes('TEACHER')){
      this.router.navigate(['teacher-panel']);
    }else{
      this.router.navigate(['']);
    }
  }
  onLogout(){
    this.accountsService.logout();
    this.router.navigate(['/welcome']);
  }
  resetForm(loginForm: NgForm){
    loginForm.reset();
  }
  toSignup(){
    this.router.navigate(['signup'])
  }
}
