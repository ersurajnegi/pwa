import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { environment } from '../environments/environment';
import { HttpClientModule } from '@angular/common/http';

import { MatCardModule } from '@angular/material/card';

import { GoogleApiModule, NgGapiClientConfig, NG_GAPI_CONFIG } from 'ng-gapi';

const gapiClientConfig: NgGapiClientConfig = {
  client_id: '167869172646-igbjj61e90inkd162a3q4ebfebcqj78h.apps.googleusercontent.com',
  discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/gmail/v1/rest'],
  scope: 'https://www.googleapis.com/auth/gmail.readonly'
};

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    HttpClientModule,
    MatCardModule,
    ServiceWorkerModule.register('/ngsw-worker.js', { enabled: environment.production }),
    GoogleApiModule.forRoot({
      provide: NG_GAPI_CONFIG,
      useValue: gapiClientConfig
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
