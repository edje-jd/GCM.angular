import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppComponent } from '../app.component';
import { AuthService } from '../_services/auth.service';
import { TokenStorageService } from '../_services/token-storage.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  form: any = {
    username: null,
    password: null
  };
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  roles: string[] = [];
  app! : AppComponent;
  User:any;
  currentUser:any ;
  constructor(private token: TokenStorageService,private authService: AuthService, private tokenStorage: TokenStorageService,private router:Router) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.User=this.tokenStorage.getUser().user;
    }
  }

  onSubmit(): void {
    const { username, password } = this.form;

    this.authService.login(username, password).subscribe(
      data => {
        this.tokenStorage.saveToken(data.accessToken);
        this.tokenStorage.saveUser(data);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        
        this.roles = this.tokenStorage.getUser().roles;
        this.reloadPage();
        // this.router.navigateByUrl('board-user');
        
        this.app.ngOnInit();
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
      }
    );
    
  }

  reloadPage(): void {
    window.location.reload();
  }
}
