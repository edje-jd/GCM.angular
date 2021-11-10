import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { BoardAdminComponent } from '../board-admin/board-admin.component';
import { HomeComponent } from '../home/home.component';
import { TokenStorageService } from '../_services/token-storage.service';
import { UserService } from '../_services/user.service';

@Component({
  selector: 'app-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.css']
})
export class BoardUserComponent implements OnInit {
  content?: string;
  currentUser:any;
  showAdminBoard:any;
  roles: string[] = [];
  isLoggedIn = false;

  
  showModeratorBoard = false;
  username?: string;
  title='GCM.SISTA';
  public show = false;
  dialogRef!: MatDialogRef<any> | undefined   ;
  constructor(public dialog:MatDialog,private observer: BreakpointObserver,private tokenStorageService: TokenStorageService,private userService: UserService,private token: TokenStorageService) { }

  ngOnInit(): void {
    this.currentUser = this.token.getUser();
    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;
    this.showAdminBoard = this.roles.includes('ROLE_ADMIN');};
    this.roles = this.tokenStorageService.getUser().roles;
    this.userService.getUserBoard().subscribe(
      data => {
        this.content = data;
      },
      err => {
        this.content = JSON.parse(err.error).message;
      }
    );
    this.isLoggedIn = !!this.tokenStorageService.getToken();

    if (this.isLoggedIn) {
      const user = this.tokenStorageService.getUser();
      this.roles = user.roles;

      this.showAdminBoard = this.roles.includes('ROLE_ADMIN');
      this.showModeratorBoard = this.roles.includes('ROLE_MODERATOR');

      this.username = user.username;
    }
  }
  
  
  openDialog() {
    this.dialogRef = this.dialog.open(HomeComponent, {
      height: '450px',
      width: '400px',
      
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = undefined;
  });
  }
  openUtil(){
    this.dialog.open(BoardAdminComponent, {
      height: '300px',
      width: '300px',
      
    });
  }

  isShow(){
    this.show=!this.show;

  }
  

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
}
