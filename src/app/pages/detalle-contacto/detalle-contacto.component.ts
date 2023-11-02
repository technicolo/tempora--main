import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Contacto } from 'src/app/interfaces/contacto';
import { ContactsService } from 'src/app/services/contacts.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-detalle-contacto',
  templateUrl: './detalle-contacto.component.html',
  styleUrls: ['./detalle-contacto.component.scss']
})
export class DetalleContactoComponent implements OnInit{
  contactsService = inject(ContactsService);
  activatedRoute = inject(ActivatedRoute);
  router = inject(Router);

  contacto:Contacto = {
    id: 0,
    name: '',
    lastName: '',
    address: '',
    email: '',
    image: '',
    number: '',
    company: '',
    userId: 0
  }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(params =>{
      this.contactsService.getById(params['id']).then(res => {
        if(res) this.contacto = res;
      })
    })
  }
    borrarContacto(){
      Swal.fire({
        title: '¿Querés eliminar el contacto '+this.contacto.name+ ' '+ this.contacto.lastName+'?',
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: 'Eliminar',
        cancelButtonText: 'Cancelar'
      }).then((result) => {
        if (result.isConfirmed) {
          this.contactsService.delete(this.contacto.id).then(res =>{
            if(res){ //Contacto borrado
              Swal.fire(
                'Deleted!',
                'Your file has been deleted.',
                'success'
              );
              this.router.navigate(['contacts']);
            } else { //Error borrando contacto
              Swal.fire(
                'Error borrando contacto',
                'Intenta nuevamente.',
                'error'
              )
            }
          });

         
        }
      })


    }
    
  
  

}

