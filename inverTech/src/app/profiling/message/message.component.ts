import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent {
  @Input() messageChild: number = 0;

  informaciones = [
    {texto: '¡Hola! Yo soy Inver', preguntas: []},
    {texto: '¿Cómo supiste de InverTech?', preguntas: ['App Store', 'Facebook', 'Instagram', 'Amigos/familia', 'otros']},
    {texto: '¿Cuánto sabes de inversiones', preguntas: ['Recién empiezo a aprender', 'Conozco algunos términos', 'Se invertir a bajo riesgo', 'Tengo un nivel intermedio o avanzado']},
    {texto: '¿Por qué quieres aprender a invertir?', preguntas: ['Impulsar mi carrera financiera', 'Impulsar mis estudios', 'Sueño con cumplir metas', 'Inversión a corto o mediano plazo']},
    {texto: 'Un mundo de oportunidades se abrirá para ti', preguntas: []},
    {texto: '¿Cuál es tu meta diaria de aprendizaje', preguntas: ['5 mins/día', '10 mins/día', '15 mins/día', '30 mins/día']},
    {texto: '¡Ahora, veamos cuál es el lugar ideal desde donde empezar!', preguntas: ['¿Aprenderás de Inveriones por primera vez? ¡Empieza desde cero!', '¿Ya sabes algo de inversiones? Responde algunas preguntas para conocer tu nivel']},
    {texto: 'Y antes de pasar a tu perfil, es importante fijar metas para mantener la motivación.', preguntas: ['Racha de 7 días', 'Racha de 14 días', 'Racha de 20 días', 'Racha de 30 días']},
  ]
}
