import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import * as homeJson from '../../assets/home.json';
import { AuthService } from '../../common/auth/auth.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {
  private userSubs!: Subscription;
  isAuth: boolean = false;
  gossip: any;
  homeJson: any = (homeJson as any).default;

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
    this.userSubs = this.authService.user.subscribe(
    user => {
      this.isAuth = !!user;
      if(this.isAuth){
        this.gossip = this.homeJson.loggedInUser;
      } else {
        this.gossip = this.homeJson.notLoggedInUser;
      }
    }
  );
  }
  
  ngOnDestroy() {
   this.userSubs.unsubscribe();
  }

}
