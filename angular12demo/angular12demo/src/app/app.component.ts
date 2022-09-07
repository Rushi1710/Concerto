import { Component, ViewEncapsulation } from '@angular/core';
import { DemoService } from './services/demo.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None

})

//components = BL+UI
export class AppComponent {

  title = 'angular12demo';
  bod = new Date();
  isInValid: boolean = false;
  message: string = 'some message';
  type='text';
  red = "red";

  constructor(public service : DemoService) {

  }
  display() {
    return "Some Text";
  }
  clicked() {
    alert('I was Clicked');
  }                                                                                                                                                                                                                                                                                                                                                                                                           
  newEmpAdded(newemp: any) {
    console.log(newemp);
    this.employee=newemp;
  }  
  employee:any;  

  getTodos(){
    console.log('getting all todos');
    this.service.getAllTodos().subscribe((data: any)=>console.log(data))
 }
  getTodoById(id:any){

  }
  postTodo()
  {

  }
  deleteTodo(){

  }
  updateTodo()
  {
    
  }
}


