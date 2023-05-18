import { Component } from '@angular/core';

@Component({
  selector: 'app-errorlogin-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ErrorLoginModalComponent {
  title = 'Error';
  content = 'Error, contraseña incorrecta';
  action = 'Cerrar';
  

}
