import { Component, OnInit } from '@angular/core';
import { AuthGuardService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private authService: AuthGuardService) { }

  ngOnInit() {
  }

  login(){
    this.authService.login();
  }

  logout(){
    this.authService.logout();
  }

}
