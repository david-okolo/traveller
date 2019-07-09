import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.sass']
})
export class NavbarComponent implements OnInit {

  link: HTMLElement;

  constructor() { }

  ngOnInit() {
  }

  collectVariables(){
    
  }

  showCreate(){
    //TODO
  }

  showDatabase(){
    //TODO
  }

}
