import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit,OnChanges {
  @Input()
  newemp:any;
  nos: number[] = [1, 2, 34, 5, 6,];
  employees: any[] = [];
  constructor() {
    this.employees = [
      {
        eid: 1, ename: 'shalini',
        email: 'shalini@gmail.com', phone: '1321312312'
        , address: { country: 'India' }
      },
      {
        eid: 2, ename: 'shalini123',
        email: 'shalini@gmail.com', phone: '1321312312'
        , address: { country: 'India' }
      },
      {
        eid: 3, ename: 'shalini789',
        email: 'shalini@gmail.com', phone: '1321312312'
        , address: { country: 'India' }
      }
    ]
  }
  ngOnChanges(changes: SimpleChanges): void {
    if(this.newemp !== undefined)
    this.employees.push(this.newemp)
  }

  people: any[] = [
    {
    "name": "Douglas Pace",
    "age": 35,
    "country": 'MARS'
    },
    {
    "name": "Mcleod Mueller",
    "age": 32,
    "country": 'USA'
    },
    {
    "name": "Aguirre Ellis",
    "age": 34,
    "country": 'UK'
    },
    {
    "name": "Cook Tyson",
    "age": 32,
    "country": 'USA'
    }
    ];
  ngOnInit(): void {
  }

}
