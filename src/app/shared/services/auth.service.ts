import {Injectable, OnInit} from '@angular/core';
import {Http, Headers} from "@angular/http";

@Injectable()
export class AuthService implements OnInit{

  IsLogged:boolean = false;

  constructor(private http:Http) { }

  ngOnInit(): void {
  }

  authenticate(email:string, password:string){
    let url = "http://localhost:8080/index";
    let params = 'username='+email+'&password='+password;
    let headers: Headers = new Headers(
      {
        'Content-Type': 'application/x-www-form-urlencoded'
        // 'Access-Control-Allow-Credentials' : true
      });

    return this.http.post(url, params, {headers: headers, withCredentials : true});

  }



  //
  // logout() {
  //   let url = "http://localhost:8080/logout";
  //   return this.http.get(url, { withCredentials: true });
  // }
}
