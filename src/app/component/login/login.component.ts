import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from  '@angular/forms';
import { Router,ActivatedRoute } from  '@angular/router';
import { AuthService } from 'src/app/service/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  credentials :any;
  userForm:any= FormGroup;
i:any;
  user: any;
  userName:any='';
  
  constructor(public formBuilder: FormBuilder,private router:Router,public data:AuthService,private route:ActivatedRoute ) { 
  
    data.credentials.subscribe( (getCredentials:any)=>{
 this.credentials=getCredentials;

     });
    
  
  }
  ngOnInit(): void {
    this.userForm = this.formBuilder.group({
      userName: ['', [Validators.required]],
      Password:['',[Validators.required]],
      
    });
    this.userName=this.route.snapshot.paramMap.get('user')
  }
  get getControl(){
    return this.userForm.controls;
  }
  onLogin(){
    if(!this.userForm.dirty)
    {
      alert('userName and Password is Mandtory')
    }
    else{
   
      for(this.i=0;this.i<this.credentials.length;this.i++)
      {
 
        if(this.userForm.value.userName==this.credentials[this.i].userName && 
          this.userForm.value.Password==this.credentials[this.i].Password)
          {
            alert('successfully logined');
            this.user=this.userForm.value.userName
            this.router.navigate(['home',this.userForm.value.userName]);
            const data=this.data.login.value;
            this.data.login.next({loggedIn:true,Name:this.userForm.value.userName})
          }
        
      }
      
    
    }
    
  
  }

 
}
