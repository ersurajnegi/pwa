import { Component } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { OnInit } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Poker App By Cockpit';

  constructor(private updates: SwUpdate) {}

  ngOnInit() {
    console.log('checking Update');
    this.updates.available.subscribe(event => {
      console.log('new Version available');
      this.updates.activateUpdate().then(() => {
        alert('A New Version of the app is available!!!!');
        document.location.reload();
      });
    });
    this.updates.checkForUpdate();
  }
}
