import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {AuthService} from "../services/auth.service";
import {Injectable} from "@angular/core";
/**
 * Created by Administrator on 2017-04-04.
 */
@Injectable()
export class AuthGuard implements CanActivate{

  constructor(private authService:AuthService,private router:Router){
  }

  canActivate(next:ActivatedRouteSnapshot,state:RouterStateSnapshot){
    if(this.authService.utilisateurConnecte!=null){
      return true;
    }else{
      this.router.navigate(["/login"]);
      return false;
    }
  }

}
