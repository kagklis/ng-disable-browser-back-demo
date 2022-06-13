import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
   selector: 'app-second',
   standalone: true,
   imports: [SharedModule],
   templateUrl: './second.component.html',
   styleUrls: ['./second.component.scss'],
})
export class SecondComponent implements OnInit {
   disableButton$: Observable<boolean>;

   constructor(private dataService: DataService) {
      this.disableButton$ = this.dataService.disableButton$;
   }

   ngOnInit(): void {}

   disable(): void {
      const currentValue = this.dataService.disableButtonSubject.getValue();
      this.dataService.disableButtonSubject.next(!currentValue);
   }
}
