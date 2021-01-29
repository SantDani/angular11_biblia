import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';

//decorador importante para el tema de los sevicios
@Injectable({
  providedIn: 'root'
})

export class RandomGuard implements CanActivate {
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> |

    boolean | UrlTree {

      const numRand = Math.random();
      console.log(numRand);
      if(numRand > 0.4){
        return true;
      }else{
        return false;
      }


    //True dejamos pasar a la siguienre ruta
    //False bloqueamos el acceso a la siguiente ruta
    return true;

  }

}
