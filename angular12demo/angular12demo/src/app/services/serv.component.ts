import { importType } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { DemoService } from './demo.service';


@Component({
  selector: 'app-serv',
  templateUrl: './serv.component.html',
  styleUrls: ['./serv.component.css']
})
export class ServComponent implements OnInit {

  title: string;
  httpservice: any;
  constructor(public service: DemoService) {
    this.title = service.message;
  }


  changeTitle(){
    this.service.setMessage(this.title);
  }
  ngOnInit(): void {
  }

}
