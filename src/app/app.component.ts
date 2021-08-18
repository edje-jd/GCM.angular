import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './_services/auth.service';

import { TokenStorageService } from './_services/token-storage.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  title='GCM.SISTA';
  public show = false;
  dialogRef!: MatDialogRef<any> | undefined   ;

  constructor(private tokenStorageService: TokenStorageService,public dialog:MatDialog,private observer: BreakpointObserver) { }

  ngOnInit(): void {
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
      height: '400px',
      width: '400px',
      
    });

    this.dialogRef.afterClosed().subscribe(result => {
      this.dialogRef = undefined;
  });
  }
  openUtil(){
    this.dialog.open(BoardAdminComponent);
  }

  isShow(){
    this.show=!this.show;

  }
  

  logout(): void {
    this.tokenStorageService.signOut();
    window.location.reload();
  }
//   @ViewChild(MatSidenav)
//  sidenav!: MatSidenav;

// aside:any;

//   ngAfterViewInit() {
//     this.observer.observe(['(max-width: 800px)']).subscribe((res) => {
//       if (res.matches) {
//         this.aside.mode = 'over';
//         this.aside.close();
//       } else {
//         this.aside.mode = 'side';
//         this.aside.open();
//       }
//     });
//   }
   
}

