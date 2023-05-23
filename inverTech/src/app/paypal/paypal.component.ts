import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';
import { ApiService } from '../services/api.service';
import { userLoggedRequestI } from 'src/models/UserLoggedRequest.interface';
import { Router } from '@angular/router';

declare var paypal:any;

@Component({
  selector: 'app-paypal',
  templateUrl: './paypal.component.html',
  styleUrls: ['./paypal.component.css']
})
export class PaypalComponent implements OnInit{
  @ViewChild('paypal', { static: true }) paypalElement!: ElementRef;

  producto = {
    descripcion : 'producto en venta',
    precio     : 10,
    img        : 'imagen del producto'
  }

  title = 'angular-paypal-payment'

  constructor(private router: Router, private api: ApiService){
    
  }
  userLoggedRequest:userLoggedRequestI = {
    email : ""
  };

  ngOnInit(): void {
    paypal.Buttons({
      createOrder: (data:any, actions:any) => {
        return actions.order.create({
          purchase_units: [
            {
              description: this.producto.descripcion,
              amount     : {
                currency_code: 'USD',
                value:       this.producto.precio
              }
            }
          ]
        })
      },
      onApprove : async(data:any, actions:any)=>{
        const order = await actions.order.capture();
        let user:userLoggedRequestI = {
          "email" : ""
        };
        user.email = localStorage.getItem("email");
        this.api.setPremium(user).subscribe(data => {
          console.log("isPremium: " + data.premium);
        });
        console.log(order);
        this.router.navigate(["/learning"]);
      },
      onError : (err: any) =>{
        console.log(err)
      },
    })
    .render(this.paypalElement.nativeElement);
  }

}
