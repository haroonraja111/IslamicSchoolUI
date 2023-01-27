import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AccountService } from 'src/Services/account.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  model: any = {};
  registerForm!: FormGroup;
  branchList!: any[];

  constructor(private accountsService: AccountService, private router: Router) { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      userName: new FormControl ('', Validators.required),
      email: new FormControl ('', [Validators.required, Validators.email]),
      password: new FormControl ('',[Validators.required, Validators.minLength(4),Validators.maxLength(8)]),
    })
  }
  register(){
    this.accountsService.register(this.registerForm.value).subscribe(() =>{
      console.log("done");
      this.router.navigate(['welcome'])
    },(error: any) =>{
      console.log(error)
    });
  }
  onLogin(){
    this.router.navigate(['welcome'])
  }
  get userName(){
    return this.registerForm.get('userName');
  }
  get email(){
    return this.registerForm.get('email');
  }
  get password(){
    return this.registerForm.get('password');
  }

}
