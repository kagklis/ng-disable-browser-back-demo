import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { SharedModule } from 'src/app/shared/shared.module';

@Component({
   selector: 'app-last',
   standalone: true,
   imports: [SharedModule],
   templateUrl: './last.component.html',
   styleUrls: ['./last.component.scss'],
})
export class LastComponent implements OnInit {
   constructor(private dataService: DataService, private router: Router) {}

   ngOnInit(): void {}

   onSubmit(): void {
      this.dataService.disableButtonSubject.next(false);
      this.router.navigate(['home']);
   }
}
