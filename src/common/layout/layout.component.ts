import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { AuthService } from '../auth/auth.service';
import { User } from '../auth/user.model';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.css']
})
export class LayoutComponent implements OnInit, OnDestroy {
  private userSubs!: Subscription;
  isAuth: boolean = false;
  user!: User;


constructor(private authService: AuthService) { }

ngOnInit(): void {
  this.userSubs = this.authService.user.subscribe(
    user => {
      this.isAuth = !!user;
      this.user = user;
    }
  );
}

onLogout(){
  this.authService.logout();
}

ngOnDestroy() {
  this.userSubs.unsubscribe();
}

}
