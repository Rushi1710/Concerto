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
    EmpformComponent,
    EmpreactiveformComponent,
    ServComponent,
    
  ],
  imports: [
    BrowserModule,ReactiveFormsModule,
    AppRoutingModule,FormsModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
