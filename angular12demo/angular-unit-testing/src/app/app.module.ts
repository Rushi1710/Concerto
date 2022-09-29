import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { LoginInputOutputComponent } from './login-input-output/login-input-output.component';
import { ModelformComponent } from './modelform/modelform.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    LoginInputOutputComponent,
    ModelformComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
