import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-product-detailed-view',
  templateUrl: './product-detailed-view.component.html',
  styleUrls: ['./product-detailed-view.component.css']
})
export class ProductDetailedViewComponent implements OnInit {
  index: any;
  config: any = [{}];
  i:any;
 

  constructor(private configService:ProductService,private route:ActivatedRoute) { 
    this.configService.getAPI()
    .subscribe((data: any) => {
     
    
        // console.log(data[this.i])
        this.config={
          image:data[this.index].image,
          description:data[this.index]. description,
          rate:data[this.index]. rate,
          offer:data[this.index].offer,
          topic:data[this.index].topic
        }
      
    });
   }
 
 
  ngOnInit(): void {
    this.index=this.route.snapshot.paramMap.get('index')
  }

}
