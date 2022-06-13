import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
   selector: 'app-home',
   standalone: true,
   imports: [SharedModule],
   templateUrl: './home.component.html',
   styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
}
