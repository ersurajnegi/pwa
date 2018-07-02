import { Injectable } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { interval } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateService {
  constructor(updates: SwUpdate) {
    // interval(6 * 60 * 60).subscribe(() =>
    //   updates.checkForUpdate().then(() => {
    //     console.log('updating App');
    //     document.location.reload();
    //   })
    // );
    // updates.available.subscribe(event => {
    //   alert('new Version available');
    //   updates.activateUpdate().then(() => document.location.reload());
    // });
    // updates.activated.subscribe(event => {
    //   alert('new Version available inside activated');
    // });
  }
}
