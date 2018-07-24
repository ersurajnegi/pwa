import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { importsArray } from './module';

@NgModule({
  declarations: [AppComponent],
  imports: importsArray,
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
