import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './components/login/login.component';
import { LoginContainerComponent } from './components/login-container/login-container.component';
import { SignupComponent } from './components/signup/signup.component';
import { CreatePasswordComponent } from './components/create-password/create-password.component';

@NgModule({
  imports: [CommonModule, LoginRoutingModule, SharedModule],
  declarations: [LoginComponent, LoginContainerComponent, SignupComponent, CreatePasswordComponent]
})
export class LoginModule {}
