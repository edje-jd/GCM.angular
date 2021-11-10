import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from 'src/app/_services/token-storage.service';

@Component({
  selector: 'app-side-bare',
  templateUrl: './side-bare.component.html',
  styleUrls: ['./side-bare.component.css']
})
export class SideBareComponent implements OnInit {

  constructor(private tokenStorageService: TokenStorageService) { }

  ngOnInit(): void {
  }

}
