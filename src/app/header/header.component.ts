import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  login=function () {
    console.log('Loginnnn')
    this.router.navigateByUrl('/login');
  }

  signup = function() {
    console.log('Loginnnn')
    this.router.navigateByUrl('/signup');
  }

}
