import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacto } from 'src/app/interfaces/contacto';

@Component({
  selector: 'app-icono-contacto',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './icono-contacto.component.html',
  styleUrls: ['./icono-contacto.component.scss']
})
export class IconoContactoComponent {

  @Input({required:true}) contacto!:Contacto;

}
