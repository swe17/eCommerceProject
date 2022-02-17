import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { ProductService } from 'src/app/service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  displayCartItem = JSON.parse(localStorage.getItem('cart')!);

  cartIndex: any;

  config: any = [{}];
  i: any;
  cartStatus = false;
  index: any;


  quantity: any
  constructor(private configService: ProductService, private route: ActivatedRoute,) {

    this.configService.getAPI()
    .subscribe((data: any) => {
      for(this.i=0;this.i<this.displayCartItem.length;this.i++)
       { this.index=this.displayCartItem[this.i].index;
        this.config[this.i] = {
          image: data[this.index].image,
          description: data[this.index].description,
          rate: data[this.index].rate,
          offer: data[this.index].offer,
          topic: data[this.index].topic,
          quantity:this.displayCartItem[this.i].quantity
        }
       }
       console.log(this.config[this.i].quantity)
      });
  
    }
   
  ngOnInit(): void {
    this.route.params.forEach((urlParams) => {

      this.cartIndex= urlParams['cartIndex'];

      this.quantity=urlParams['quantity'];

    });
    console.log(this.cartIndex)
    console.log(this.quantity)
    if(this.cartIndex){

      const index=parseInt(this.cartIndex);

      const quantity=parseInt(this.quantity);

      

      if(this.displayCartItem==null)

      {       this.displayCartItem=[{"index":index,"quantity":quantity}]

      localStorage.setItem('cart', JSON.stringify(this.displayCartItem));

    }

      else{

      this.displayCartItem.push({index,quantity});

      localStorage.setItem('cart', JSON.stringify(this.displayCartItem));

      }

    }



  }


  removeCartItem(removeCartItem: any) {
    this.config.splice(removeCartItem, 1);
    this.displayCartItem.splice(removeCartItem, 1);
    localStorage.setItem('cart', JSON.stringify(this.displayCartItem));
    alert("Removed Successfully!!");
    console.log(this.cartEmpty)
  }
  cartEmpty(cartEmpty: any) {
    throw new Error('Method not implemented.');
  }

}