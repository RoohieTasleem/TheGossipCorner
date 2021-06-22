import { Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import { NgForm } from "@angular/forms";
import { Router } from '@angular/router';
import { AuthService } from './auth.service';
import { Toast } from 'bootstrap';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.css']
})
export class AuthComponent implements OnInit {

  @ViewChild('authForm', { static: false }) authForm!: NgForm;
  @ViewChild('closeLoginModal', { static: false }) closeLoginModal? : ElementRef;
  error: string = null!;
  successLogin: string = null!;
  
  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
  }

  onSubmit(authForm: NgForm) {
    if (!authForm.valid) {
      return;
    }

    const userId = authForm.value.userId;
    const password = authForm.value.password;

    this.authService.login(userId, password).subscribe((res:any)=> {
      if(res.isLoginSuccess) {
        this.error = null!;
        this.successLogin = "Login Successfull";
        this.authForm.reset();
        this.closeLoginModal?.nativeElement.click();
        const loginToastElement = document.getElementById('loginToast') as HTMLElement;
        const loginToast = new Toast(loginToastElement);
        loginToast.show()
      } else {
        this.handleError(res.err);
      }
    },
    error => {
      this.handleError(error);
    });
  }

  handleError(error?: any){
      this.successLogin = null!;
      this.error = error;
      this.authForm.reset();
  }

}
