import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { EmployeeComponent } from './employee/employee.component';
import { ParentComponent } from './parent.component';
import { ChildComponent } from './child.component';
import { DirectiveComponent } from './directive/directive.component';
import { HoverDirective } from './directive/hover.directive';
import { PipeComponent } from './pipe/pipe.component';
import { PowerPipe } from './pipe/power.pipe';
import { EmpformComponent } from './empform/empform.component';
import { EmpreactiveformComponent } from './empreactiveform/empreactiveform.component';
import { ServComponent } from './services/serv.component';
import { HttpClientModule } from '@angular/common/http';
import { LoginComponent } from './login/login.component';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatInputModule} from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ObservableComponent } from './observable/observable.component';
import { ProfileComponent } from './profile/profile.component';
import { ProfileinfoComponent } from './profileinfo/profileinfo.component';
import { LoginInputOutputComponent } from './login-input-output/login-input-output.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    EmployeeComponent,
    ParentComponent,
    ChildComponent,
    DirectiveComponent,
    HoverDirective,
    PipeComponent,
    PowerPipe,
   // EmpformComponent,
    EmpreactiveformComponent,
    ServComponent,
    LoginComponent,
    ObservableComponent,
    ProfileComponent,
    ProfileinfoComponent,
    LoginInputOutputComponent,
    
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule,HttpClientModule,
    MatButtonModule,MatCardModule,MatInputModule,BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
