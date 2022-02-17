import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/service/product.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {


  config: any = [{}];
  i: any;
  quantity: any

  search: any;
  j=0;
  searchWord: any;


  constructor(private configService: ProductService, private router: Router, private route: ActivatedRoute) {
    this.configService.getAPI()
      .subscribe((data: any) => {
        for (this.i = 0; this.i < data.length; this.i++) {
          if (this.searchWord == null) {
            this.config[this.i] = {
              image: data[this.i].image,
              description: data[this.i].description,
              rate: data[this.i].rate,
              offer: data[this.i].offer,
              topic: data[this.i].topic,
              quantity: data[this.i].quantity
            }
           
          }

          else {
            if (data[this.i].topic.toLowerCase().startsWith(this.searchWord)) {
              this.config[this.j] = {
                image: data[this.i].image,
                description: data[this.i].description,
                rate: data[this.i].rate,
                offer: data[this.i].offer,
                topic: data[this.i].topic,
                quantity: data[this.i].quantity
              }
          this.j++
          console.log(this.config)
          console.log(this.searchWord)
            }
       
          }
        }
      });

    this.searchWord = this.route.snapshot.paramMap.get('search')
    console.log(this.searchWord)
  }

  detail(index: any) {
    this.router.navigate(['detailedView', index])
  }
  cart(cartIndex: any) {
    this.quantity = this.config[cartIndex].quantity
    this.router.navigate(["cart", cartIndex, this.quantity])
    console.log(cartIndex)
  }


  quantityPlus(i: any) {

    this.config[i].quantity += 1

  }
  quantityMinus(i: any) {
    this.config[i].quantity -= 1
  }

}



