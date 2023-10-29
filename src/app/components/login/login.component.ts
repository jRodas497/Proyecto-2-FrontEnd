import { Component, OnInit } from '@angular/core';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup } from '@angular/forms';
import { CookieService } from 'ngx-cookie-service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{
  user: FormGroup
  public persona: any;

  constructor(private fb:FormBuilder,
    private _userService: UserService,
    private _router: Router,
    private _cookieService: CookieService,) {
      this.user = this.fb.group({
        usuario: [''],
        password: ['']
      })
    }

  ngOnInit(): void {
  }
  

  login() {
    console.log(this.user);
    this._userService.login(this.user.value).subscribe(
      (response)=> {
        console.log(response);
        console.log('Bienvenido!');
        this._cookieService.set('usuario', JSON.stringify(response)) 

        Swal.fire({
          position: 'center',
          icon: 'success',
          title: 'Bienvenido!',
          showConfirmButton: false,
          timer: 2500
          
        })

      },
      (error)=>{
        console.log(error);
        Swal.fire({
          icon: 'error',
          title: 'Usuario o contraseña incorrectos',
          showConfirmButton: false,
          timer: 1500
        })
      }
    )
    

   
    Swal.fire({
      icon: 'success',
      title: 'Bienvenido!',
      showConfirmButton: false,
      timer: 1500
    })
    this._router.navigate(['/home'])

          
  }
}
