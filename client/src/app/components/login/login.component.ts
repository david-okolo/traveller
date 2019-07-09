import { Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import anime from "animejs/lib/anime.es"

interface loginData {
  username: string,
  password: string
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})



export class LoginComponent implements OnInit {

  username: string;
  password: string;

  display:any;

  wrapper: HTMLElement;
  loginBtn : HTMLElement;
  loginText: HTMLElement;
  loginTextFailed: HTMLElement;
  loginSvg: HTMLElement;
  
  formHeader: HTMLElement
  formUsername: HTMLElement
  formPassword: HTMLElement

  pop = ".23, 1.25, 0.46, 1";

  @Output() loggedIn = new EventEmitter<boolean>()

  @Input() logoData: HTMLElement;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.collectVariables()
    this.moveCenter(this.wrapper)
  }

  collectVariables(){
    this.wrapper = document.getElementById('loginWrapper')
    this.loginBtn = document.getElementById('loginBtn')
    this.loginText = document.getElementById('loginText')
    this.loginSvg = document.getElementById('loginSvg')
    this.formHeader = document.getElementById('header')
    this.formUsername = document.getElementById('username')
    this.formPassword = document.getElementById('password')
  }

  signin(){
    let loginData:loginData = {
      username: this.username,
      password: this.password
    }
    if(loginData.username == "" || loginData.password == "" || loginData.username == undefined || loginData.password == undefined){
      this.buttonAnimFailed();
    }else{
      this.authService.signin(loginData)
      .subscribe(data => {
        if(data.success == true){
          this.buttonAnimSuccess();
          localStorage.setItem('token', data.token);
          this.loggedIn.emit(true);
        }else{
          this.buttonAnimFailed();
        }
        
      })
    }
  }

  moveCenter(el: HTMLElement){
    let vertical = ((window.innerHeight - el.clientHeight)/2) - (this.logoData.clientHeight + this.logoData.offsetTop)

    el.style.marginTop = vertical.toString() + 'px'
  }

  setCenter(_element: HTMLElement, _parent: HTMLElement){
    let verticalCenter = (_parent.clientHeight/2) - (_element.clientHeight/2)
    let horizCenter = (_parent.clientWidth/2) - (_element.clientWidth/2)
    _element.style.top = verticalCenter.toString() + "px"
    _element.style.left = horizCenter.toString() + "px"
  }

  buttonAnimSuccess(){
    let animation = anime.timeline({})

    .add({
      targets: this.loginBtn,
      width: "60px",
      borderRadius: "60px",
      backgroundColor: "#4BB543",
      duration: 300,
      easing: 'cubicBezier('+this.pop+')'
    })
    .add({
      targets: this.loginText,
      opacity: "0",
      duration: 300
    }, "-=300")
    .add({
      targets: this.loginSvg,
      opacity: "1"
    })
    .add({
      targets: this.formHeader,
      translateX: "-200px",
      opacity: 0,
      duration: 300,
      easing: 'easeInOutQuad'
    })
    .add({
      targets: this.formHeader,
      translateX: "-200px",
      opacity: 0,
      duration: 300,
      easing: 'easeInOutQuad'
    })
    .add({
      targets: this.formUsername,
      translateX: "-200px",
      opacity: 0,
      duration: 300,
      easing: 'easeInOutQuad'
    }, "-=50")
    .add({
      targets: this.formPassword,
      translateX: "-200px",
      opacity: 0,
      duration: 300,
      easing: 'easeInOutQuad'
    }, "-=100")
  }

  buttonAnimFailed(){
    let animation = anime.timeline({})

    .add({
      targets: this.loginBtn,
      width: "250px",
      borderRadius: "0px",
      backgroundColor: "#dc3545",
      duration: 600,
      easing: 'cubicBezier('+this.pop+')'
    })
    .add({
      targets: this.loginBtn,
      width: "200px",
      borderRadius: "0px",
      backgroundColor: "#1f1e48",
      duration: 300,
      easing: 'cubicBezier('+this.pop+')'
    })
  }

}
