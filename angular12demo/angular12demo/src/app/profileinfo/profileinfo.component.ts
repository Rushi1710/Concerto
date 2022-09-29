import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-profileinfo',
  templateUrl: './profileinfo.component.html',
  styleUrls: ['./profileinfo.component.css']
})
export class ProfileinfoComponent implements OnInit {

  eid:number=0;
  constructor(private route:ActivatedRoute) { 
    
  }

  ngOnInit(): void {
    this.route.parent?.params.subscribe(param =>this.eid = parseInt(param.id))
  }

}
