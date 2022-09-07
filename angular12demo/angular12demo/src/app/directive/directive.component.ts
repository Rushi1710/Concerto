import { Component, DoCheck, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-directive',
  templateUrl: './directive.component.html',
  styleUrls: ['./directive.component.css']
})

export class DirectiveComponent implements OnInit {
  bike: string =  "Hero.jpg";
  constructor() { 
  }
  ngOnInit(): void {
    
  }
}