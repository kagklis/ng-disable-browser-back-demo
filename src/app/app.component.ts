import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
   selector: 'app-root',
   standalone: true,
   imports: [RouterModule],
   templateUrl: './app.component.html',
   styleUrls: ['./app.component.scss'],
})
export class AppComponent {
   constructor(router: Router) {
      router.canceledNavigationResolution = 'computed';
   }
}
