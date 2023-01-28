import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map, ReplaySubject } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from 'src/Models/user';

@Injectable({
  providedIn: 'root'
})
export class AccountService {
  baseUrl = environment.ApiUrl;
  private currentUserSource = new ReplaySubject<User>(1);
  currentUser$ = this.currentUserSource.asObservable();
  user!: User;

constructor(private http: HttpClient, private router: Router) { }
login(model: any){
  return this.http.post<User>(this.baseUrl + 'Account/login', model).pipe(
    map((response: User) =>{
      const user = response;
      if(user){
        localStorage.setItem('user', JSON.stringify(user));
        localStorage.setItem('token', JSON.stringify(user.token));
        localStorage.setItem('roles', JSON.stringify(user.roles));
        this.setCurrentUser(user);
      }
      return user;
    })
  )
}
setCurrentUser(user: User){
  user.roles = [];
  localStorage.setItem('user',JSON.stringify(user));
  this.currentUserSource.next(user);
}
logout(){
  localStorage.removeItem('user');
  localStorage.removeItem('token');
  localStorage.removeItem('roles');
  this.currentUserSource.next(null!);
}
register(model: any){
  return this.http.post<User>(this.baseUrl + 'Account/Registration', model)
}
}
