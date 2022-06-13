import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
   providedIn: 'root',
})
export class DataService {
   disableButtonSubject = new BehaviorSubject<boolean>(false);
   disableButton$ = this.disableButtonSubject.asObservable();

   constructor() {}
}
