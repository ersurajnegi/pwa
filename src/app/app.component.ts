import { Component, HostListener } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Poker App By Cockpit';

  navigator: any;
  @HostListener('window:offline', ['$event'])
  offline(event) {
    this.snackBar.open('You are Offline', 'Close', { duration: 2000 });
  }

  @HostListener('window:online', ['$event'])
  online(event) {
    this.snackBar.open('You are Online', 'Close', { duration: 2000 });
  }

  constructor(private updates: SwUpdate, private snackBar: MatSnackBar) {}

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
