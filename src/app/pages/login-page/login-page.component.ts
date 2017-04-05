import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../shared/services/auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: 'login-page.component.html',
  styleUrls: ['login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(private _authService$:AuthService,private _router:Router) { }

  ngOnInit() {
  }

  authentifier(utilisateur:string,motDePasse:string){
    this._authService$.authenticate(utilisateur,motDePasse).subscribe(
      res => {
        if (res.text() == 'success') {
          this._authService$.utilisateurConnecte = utilisateur;
          this._router.navigate(["/home"]);
        }
      },
      err => console.log(err)
    );
  }

}
