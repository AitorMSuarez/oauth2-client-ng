import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Token } from '@angular/compiler';
import { TokenService } from 'src/app/services/token.service';

@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css'],
})
export class LogoutComponent implements OnInit {
  constructor(private router: Router, private tokenService: TokenService) {}

  ngOnInit(): void {
    this.tokenService.clear();
    this.router.navigate(['']);
  }
}
