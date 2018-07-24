import { Component, HostListener, OnInit } from '@angular/core';
import { SwUpdate } from '@angular/service-worker';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs';
import { AngularFireAuth } from 'angularfire2/auth';
import { auth } from 'firebase';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  items: Observable<any[]>;
  user: any;
  // @HostListener('window:offline', ['$event'])
  // offline(event) {
  //   this.snackBar.open('You are Offline', 'Close', { duration: 2000 });
  // }

  // @HostListener('window:online', ['$event'])
  // online(event) {
  //   this.snackBar.open('You are Online', 'Close', { duration: 2000 });
  // }

  constructor(private updates: SwUpdate, db: AngularFireDatabase, public afAuth: AngularFireAuth) {
    // db.list('tasks').valueChanges().subscribe((data) => {
    //   console.log('tasks : ', data);
    //   this.items = data;
    // })
    // afAuth.user.subscribe((data) => {
    //   this.user = data;
    // });
  }

  login() {
    //this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
  }
  logout() {
    //this.afAuth.auth.signOut();
  }

  ngOnInit() {
    //   this.updates.available.subscribe(event => {
    //     this.updates.activateUpdate().then(() => {
    //       alert('A New Version of the app is available!!!!');
    //       document.location.reload();
    //     });
    //   });
    //   this.updates.checkForUpdate();
  }

  signUpwithEmail(id: string, pwd: string) {
    this.afAuth.auth.createUserAndRetrieveDataWithEmailAndPassword(id, pwd).then(
      data => {
        console.log(data);
      },
      error => {
        console.error(error);
      }
    );
  }

  signInwithEmail(id: string, pwd: string) {
    this.afAuth.auth.signInAndRetrieveDataWithEmailAndPassword(id, pwd).then(
      data => {
        this.afAuth.auth.currentUser.sendEmailVerification().then(res => {
          console.log('email sent : ', res);
        });
      },
      error => {
        console.error(error);
      }
    );
  }
}
