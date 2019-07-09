import { Component, OnInit } from '@angular/core';
import anime from 'animejs/lib/anime.es'
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.sass']
})
export class HomeComponent implements OnInit {

  primarycolor = "#1f1e48";
  lightgrey = "#f2f2f2";
  darkgrey = "#828282";

  pop = ".23, 1.25, 0.46, 1";


  title: HTMLElement;
  wrapper: HTMLElement;
  wrapperdiv: HTMLElement;
  cover: HTMLElement;
  logo: HTMLElement;
  copy: HTMLElement;
  leftColumn: HTMLElement;
  rightColumn: HTMLElement;

  showLogin: Boolean = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.collectVariables();
    this.setCenter(this.title, this.wrapper)
    this.setBottom(this.copy)
    

    let t1 = anime.timeline({})

    t1
    .add({
      targets: this.title,
      left: this.logo.offsetLeft,
      top: this.logo.offsetTop,
      fontSize: 24,
      fontWeight: 100,
      color: "#1f1e48",
      letterSpacing: "13px",
      delay: 1000,
      duration: 300,
      easing: 'cubicBezier('+this.pop+')'
    })
    .add({
      targets: this.cover,
      left: window.innerWidth +'px',
      width: 0,
      opacity: 0,
      duration: 300,
      easing: 'easeInOutQuad'
    }, "-=300")


    t1.finished.then(()=>{
      // this.title.style.position = "static"
      // this.cover.style.display = "none"
      this.logo.style.opacity = "1"
    })
    .then(()=>{
      this.title.style.opacity = "0"
      // this.title.style.display = "none"
    })
  }

  collectVariables(){
    this.title = document.getElementById('title')
    this.wrapper = document.getElementById('wrapper')
    this.wrapperdiv = document.getElementById('wrapperdiv')
    this.cover = document.getElementById('cover')
    this.logo = document.getElementById('logo')
    this.copy = document.getElementById('copy')
    this.leftColumn = document.getElementById('leftColumn')
    this.rightColumn = document.getElementById('rightColumn')
    // console.log(this.logo)
  }

  setCenter(_element: HTMLElement, _parent: HTMLElement){
    let verticalCenter = (window.innerHeight/2) - (_element.clientHeight/2)
    let horizCenter = (_parent.clientWidth/2) - (_element.clientWidth/2)
    _element.style.top = verticalCenter.toString() + "px"
    _element.style.left = horizCenter.toString() + "px"
    // console.log(_element)
  }

  setBottom(_element: HTMLElement){
    let verticalSpot = (window.innerHeight) - (_element.clientHeight*1.75)
    _element.style.marginTop = verticalSpot.toString() + 'px'
  }

  columnAnimation(){
    let animation = anime.timeline({
      delay: 1500
    })

    .add({
      targets: this.logo,
      opacity: 0,
      duration: 100
    })

    .add({
      targets: this.leftColumn,
      translateX: '-'+this.leftColumn.clientWidth.toString()+'px',
      opacity: 0,
      duration: 500,
      easing: "easeInOutQuad"
    }, "-100")
    .add({
      targets: this.cover,
      left: 0,
      width: window.innerWidth.toString()+'px',
      opacity:1,
      backgroundColor: this.primarycolor,
      duration: 500,
      easing: "easeInOutQuad"

    }, "-=400")
    .add({
      targets: this.title,
      opacity: 1,
      duration: 300
    }, "-=6000")
    // .add({
    //   targets: this.cover,
    //   left: 0,
    //   width: (window.innerWidth/3).toString()+'px',
    //   opacity:1,
    //   backgroundColor: "#fff",
    //   duration: 500,
    //   easing: "easeInOutQuad"
    // })

    animation.finished.then(()=>{
      this.router.navigate([{outlets: {primary: 'dashboard'}}]);
    })
  }
}
