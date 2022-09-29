import { Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  router: any;

  constructor(public us:UserService) { }

  logoutuser(){
    this.us.logout();
    this.router.navigate(['/'])
  }

  ngOnInit(): void {
  }

}
