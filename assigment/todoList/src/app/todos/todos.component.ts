import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { TodohttpService } from '../service/todohttp.service';
import { Todo } from '../todoInterface/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit, OnChanges {

  todos:Todo[]=[];

  @Input()
  todosTodoToAdd:any={}

  checked1:any={};
  constructor(private http:TodohttpService) {

   }
  ngOnChanges(changes: SimpleChanges): void {
    
   if(this.todosTodoToAdd != undefined)
    this.todos.push(this.todosTodoToAdd);
  }

  ngOnInit(): void {
    this.http.getAllTodos().subscribe(data =>{
      this.todos=data
    })
  }

  todocheckbox(checked:Todo){
    this.checked1=checked
  }

  delete(todo1:Todo){
    if(this.checked1.id == todo1.id)
    {
      let objindx = this.todos.findIndex(todo => todo.id === todo1.id )  
      this.todos.splice(objindx,1)
      this.http.delTodo(todo1.id)
      .subscribe(()=> console.log(`this item deleted= ${todo1.id} deleted`))
    }
  }
}
