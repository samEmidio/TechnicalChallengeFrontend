import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  getRoute(){
    return this.router.url;
  }

  navigateToHome(){
    this.router.navigate(['home/events']);
  }

  logout(){
    localStorage.removeItem('user');
    this.router.navigate(['login']);
  }

}
