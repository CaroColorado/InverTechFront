import { Component } from '@angular/core';

@Component({
  selector: 'app-error-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ErrorRegisterModalComponent {
  title = 'Error';
  content = 'Error en el registro, ya existe un usuario con este correo';
  action = 'Cerrar';
  

}
