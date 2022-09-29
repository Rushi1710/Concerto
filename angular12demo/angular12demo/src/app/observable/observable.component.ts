import { Component, OnInit } from '@angular/core';
import { observable, Observable } from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  data: Observable<string> | null;
  fruits: Array<string> = [];
  anyErrors: boolean = false;
  finished: boolean = false;


  start() {
    alert('start')
    this.data = new Observable(observer => {
      setTimeout(() => { observer.next('Apple'); }, 1000);
      setTimeout(() => { observer.next('mango'); }, 2000);
      setTimeout(() => { observer.next('orange'); }, 3000);
      setTimeout(() => { observer.next('bnana'); }, 4000);
      setTimeout(() => { observer.next('grapes'); }, 5000);
      setTimeout(() => { observer.next('Watermelon'); }, 6000);
      setTimeout(() => { observer.complete(); }, 7000);
    })
    this.data.subscribe(fruit => this.fruits.push(fruit),
                          error => this.anyErrors=true,
                          ()=> this.finished = true )

    // setTimeout(() =>{
    //   SubmitEvent.unsubscribe()

    // },4000);
  }

  constructor() {
    this.data = null;

  }

  ngOnInit(): void {
  }

}
