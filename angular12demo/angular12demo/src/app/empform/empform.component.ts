import { Conditional } from '@angular/compiler';
import { Component, OnInit ,EventEmitter,Output} from '@angular/core';
import { Employee } from './model/employee';

@Component({
  selector: 'app-empform',
  templateUrl: './empform.component.html',
  styleUrls: ['./empform.component.css']
})
export class EmpformComponent implements OnInit {

  @Output()
  empadded:EventEmitter<Employee> =new EventEmitter();
  employee :Employee;
  constructor() {
    this.employee = {eid:1,ename:"",email:"",phone:"",address:{country:""}}
   }

  ngOnInit(): void {
  }
  saveEmpoiyee(emp:Employee){
    //alert('yes');
    console.log(emp);
    this.empadded.emit(emp);
  }

}
