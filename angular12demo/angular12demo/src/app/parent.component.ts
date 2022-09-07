import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit ,OnDestroy{
  enable:boolean=true;
  pcountry:string ='uk';
  emp = {"name":"Rushi"}
  constructor() { 
    console.log('parent constuctor');
  }
  ngOnDestroy(): void {
   console.log('parent ng on destory');
  }

  ngOnInit(): void {
    console.log('parent on ngOnInit');
  }

}
