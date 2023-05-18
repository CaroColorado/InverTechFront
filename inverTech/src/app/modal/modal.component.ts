import { Component } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent {
  title = 'Registro';
  content = 'Registro exitoso, ahora puedes iniciar sesión';
  action = 'Cerrar';


}
