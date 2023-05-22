import { Component, OnInit, ViewChild, ElementRef} from '@angular/core';

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
        console.log(order);
      },
      onError : (err: any) =>{
        console.log(err)
      },
    })
    .render(this.paypalElement.nativeElement);
  }

}