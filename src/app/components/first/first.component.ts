import { Component, OnInit } from '@angular/core';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
   selector: 'app-first',
   standalone: true,
   imports: [SharedModule],
   templateUrl: './first.component.html',
   styleUrls: ['./first.component.scss'],
})
export class FirstComponent implements OnInit {
   constructor() {}

   ngOnInit(): void {}
}
