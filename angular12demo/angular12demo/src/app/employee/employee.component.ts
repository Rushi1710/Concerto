import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  @Input()
  employee: any = {};
  constructor() {
    this.employee = [{
      eid: 1, ename: '', email: '', phone: '',address: { country: '' }
    }]
  }

  ngOnInit(): void {
  }

}
