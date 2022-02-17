import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent implements OnInit {


  searchWord: string="";


  constructor(public data:AuthService,private router:Router) { }

  ngOnInit(): void {
}
  logout()
  {
  
    this.data.login.next({loggedIn:false,Name:"unknown"});
  }
 search()
 {
   const search=this.searchWord
   this.router.navigate(['product',search])
 }
}
