import { Component } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent {
  startDate = new Date(1990,0,1)
  user: FormGroup
  
  constructor(private fb:FormBuilder,
    private _userService: UserService,
    private _router: Router) {
      this.user = this.fb.group({
        nombre: [''],
        usuario: [''],
        password: [''],
        telefono: [''],
        nacimiento: [''],
        rol: [2]
      })
    }

    registrar(){
      console.log(this.user);
      this._userService.registro(this.user.value).subscribe(
        (response)=>{
          console.log(response);
          console.log('Registrado!');          

          const Toast = Swal.mixin({
            toast: true,
            position: 'bottom-end',
            showConfirmButton: false,
            timer: 3500,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.addEventListener('mouseenter', Swal.stopTimer)
              toast.addEventListener('mouseleave', Swal.resumeTimer)
            }
          })

          Toast.fire({
            icon: 'success',
            title: 'Bienvenido!'
          })

          

        },
        (error)=>{
          console.log(error);

          Swal.fire({
            icon: 'error',
            title: 'No se pudo registrar el usuario',
            showConfirmButton: false,
            timer: 1500
          })
          
        }
      )
    }

    

    regresar(){
      this._router.navigate(['/login'])
    }
}
