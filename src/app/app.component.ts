import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit, ViewChild ,OnDestroy} from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { BoardAdminComponent } from './board-admin/board-admin.component';
import { HomeComponent } from './home/home.component';
import { AuthService } from './_services/auth.service';

import { TokenStorageService } from './_services/token-storage.service';
import { MediaChange, MediaObserver } from '@angular/flex-layout';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit,OnDestroy {
  
  private roles: string[] = [];
  isLoggedIn = false;
  showAdminBoard = false;
  showModeratorBoard = false;
  username?: string;
  title='GCM.SISTA';
  public show = false;
  dialogRef!: MatDialogRef<any> | undefined   ;

  public opened = true;
  private mediaWatcher!: Subscription;
  
  public sidenav!:MatSidenav ;
  constructor(private tokenStorageService: TokenStorageService,public dialog:MatDialog,private observer: BreakpointObserver,private media: MediaObserver,
    private router: Router) {
      this.mediaWatcher = this.media.asObservable().pipe(
        filter((changes: MediaChange[]) => changes.length > 0),
        map((changes: MediaChange[]) => changes[0])
        )
        .subscribe((mediaChange: MediaChange) => {
          this.handleMediaChange(mediaChange);
        }); }
        private handleMediaChange(mediaChange: MediaChange): void {
          if (this.media.isActive('lt-md')) {
            this.opened = false;
          } else {
            this.opened = true;
          }
   }
   ngOnDestroy(): void {
    this.mediaWatcher.unsubscribe();
  }
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
    window.location.replace('login');
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

