import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

user:any;
  router: any;
  
  constructor(private route:ActivatedRoute) { }

  ngOnInit(): void {
   
  }

}
