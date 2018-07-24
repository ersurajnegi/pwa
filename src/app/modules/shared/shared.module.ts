import { NgModule } from '@angular/core';
import { NoopAnimationsModule } from '@angular/platform-browser/animations';

import { MatInputModule } from '@angular/material/input';
@NgModule({
  imports: [MatInputModule],
  exports: [MatInputModule]
})
export class SharedModule {}
