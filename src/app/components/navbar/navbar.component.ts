import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor(
    private _router: Router) { }

  ngOnInit(): void {
    
  }
  limpiarStorage() {
    localStorage.clear()
    location.reload();

    this._router.navigate(['/login'])
    
  } 
}
