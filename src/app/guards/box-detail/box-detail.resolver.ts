import { Injectable } from '@angular/core';
import {
  Router,
  Resolve,
  RouterStateSnapshot,
  ActivatedRouteSnapshot,
} from '@angular/router';
import { EMPTY, Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { BoxService } from 'src/app/box/services/box/box.service';
import { Box } from 'src/app/models/box';
import { RoutingUrlConst } from 'src/app/shared/routing-url-const';

@Injectable({
  providedIn: 'root',
})
export class BoxDetailResolver implements Resolve<Box> {
  constructor(private boxService: BoxService, private router: Router) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Box> {
    return this.boxService.getBoxDetails$(route.params?.id).pipe(
      catchError(() => {
        this.router.navigate([RoutingUrlConst.boxGrid]);
        return EMPTY;
      })
    );
  }
}
