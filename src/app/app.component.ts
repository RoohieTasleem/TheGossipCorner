import { Component, OnInit } from '@angular/core';
import { AuthService } from "../common/auth/auth.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'TheGossipCorner';

  constructor(private authService: AuthService) {}

  ngOnInit(){
    this.authService.autoLogin();
  }
}
