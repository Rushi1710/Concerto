import { Component, DoCheck, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, DoCheck {

  @Input()
  country: string = 'UK';

  @Input()
  employee = { "name": "" };
  data: any[] = [
    { "country": "uk", "states": ["London"] },
    { "country": "india", "states": ["maharashtra", "UP", "MP"] },
    { "country": "ireland", "states": ["ire1", "ire2"] },
    { "country": "usa", "states": ["Illinois", "SFO"] }
  ]
  countrystates: any[] = [];
  ngDoCheck(): void {
    console.log(`child ng on changes ${this.country}`);
  }
  constructor() {
    console.log(`child constuctor ${this.country}`)
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log(`child ng on changes ${this.country}`);
    this.countrystates = this.data.filter(item => item.country === this.country);
  }

  ngOnInit(): void {
    console.log(`child ng on init ${this.country}`)

  }

}
