import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private url = "http://localhost:3000/user"

  constructor(
    public _http: HttpClient
    ) { }

    registro(user:any){
      return this._http.post(this.url + '/registrar', user)
    }

    login(user:any){
      return this._http.post(this.url + '/login', user)
    }
}
