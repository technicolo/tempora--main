import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Contacto } from 'src/app/interfaces/contacto';
import { IconoContactoComponent } from "../icono-contacto/icono-contacto.component";

@Component({
    selector: 'app-tarjeta-contacto',
    standalone: true,
    templateUrl: './tarjeta-contacto.component.html',
    styleUrls: ['./tarjeta-contacto.component.scss'],
    imports: [CommonModule, IconoContactoComponent]
})
export class TarjetaContactoComponent {
  @Input({required:true}) contacto!:Contacto;
}
