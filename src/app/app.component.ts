import { Component, HostListener } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { OnInit } from '@angular/core';
import { UserService } from './services/user/user.service';
import { ApiService } from './services/api/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  labels: any;
  // @HostListener('window:offline', ['$event'])
  // offline(event) {
  //   this.snackBar.open('You are Offline', 'Close', { duration: 2000 });
  // }

  // @HostListener('window:online', ['$event'])
  // online(event) {
  //   this.snackBar.open('You are Online', 'Close', { duration: 2000 });
  // }

  constructor(
    private updates: SwUpdate,
    private _userService: UserService,
    private _api: ApiService
  ) {}

  ngOnInit() {
    this.updates.available.subscribe(event => {
      this.updates.activateUpdate().then(() => {
        alert('A New Version of the app is available!!!!');
        document.location.reload();
      });
    });
    this.updates.checkForUpdate();
  }

  signIn() {
    this._userService.signIn();
  }

  signOut() {
    this._userService.signOut();
  }

  getLabels() {
    this._api.getLabels().subscribe((data: any) => {
      console.log(data);
      this.labels = data.labels;
    });
  }
}
