import { Injectable } from '@angular/core';
import {
   ActivatedRouteSnapshot,
   CanDeactivate,
   RouterStateSnapshot,
   UrlTree,
} from '@angular/router';
import { map, Observable } from 'rxjs';
import { DataService } from './data.service';

@Injectable({
   providedIn: 'root',
})
export class DisableBackGuard implements CanDeactivate<unknown> {
   constructor(private dataService: DataService) {}

   canDeactivate(
      component: unknown,
      currentRoute: ActivatedRouteSnapshot,
      currentState: RouterStateSnapshot,
      nextState?: RouterStateSnapshot
   ):
      | Observable<boolean | UrlTree>
      | Promise<boolean | UrlTree>
      | boolean
      | UrlTree {
      const destinationUrl = nextState?.url;
      return this.dataService.disableButton$.pipe(
         map((isDisabled: boolean) =>
            isDisabled ? destinationUrl !== '/first' : true
         )
      );
   }
}
