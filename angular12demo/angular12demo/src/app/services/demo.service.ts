import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DemoService {

  message:string;
  httpservice: any;
  constructor() { 
    this.message = 'from service'
    console.log('demo service');
  }
  getAllTodos(){
    console.log('get all todo in service')
    return this.httpservice.get('https://jsonplaceholder.typicode.com/todos');
  }
  setMessage(msg:string){
    this,this.message=msg;
  }
}
