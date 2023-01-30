import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Branches } from 'src/Models/branches';
import { User } from 'src/Models/user';

@Injectable({
  providedIn: 'root'
})
export class AdminService {
  baseUrl = environment.ApiUrl

constructor(private http: HttpClient) { }

getUserWithRoles(){
  return this.http.get<Partial<User[]>>(this.baseUrl + 'Dean/users-with-roles');
}
updateUserRoles(username: string, roles: string[]){
  return this.http.post(this.baseUrl + 'Dean/edit-roles/' + username + '?roles=' + roles, {})
}
public getBranches(): Observable<Branches[]> {
  return this.http.get<Branches[]>(this.baseUrl + 'Branch');
}
public addBracnh(bracnh: Branches): Observable<Branches>{
  return this.http.post<Branches>(this.baseUrl + 'Branch', bracnh);
}
public getUserforbranchSupervisor():Observable<User[]>{
  return this.http.get<User[]>(this.baseUrl + 'User/admins');
}
}
