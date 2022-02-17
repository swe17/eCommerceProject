import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  credentials:any=new BehaviorSubject([{"userName":"Swetha","Password":12345},{"userName":"Rajendran","Password":12478}])
  login:any=new BehaviorSubject({loggedIn:false,Name:"unknown"})

  constructor() { }

}