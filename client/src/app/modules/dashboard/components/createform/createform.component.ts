import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';
import anime from "animejs/lib/anime.es"
import { Router } from '@angular/router';

@Component({
  selector: 'app-createform',
  templateUrl: './createform.component.html',
  styleUrls: ['./createform.component.sass']
})
export class CreateformComponent implements OnInit {

  pop = ".23, 1.25, 0.46, 1";

  visas: string[] = [
    'Business',
    'Family',
    'Student',
    'Visitor',
    'Work'
  ]

  visaReqs: string[] = [
    'Valid passport',
    'Visa fee payment',
    'Bank statement showing proof of funds'
  ]

  routes: string[] = [
    'Direct',
    'Connecting'
  ]

  submitBtn: HTMLElement;

  //Form Data
  countryname: string;
  flightFee: number;
  visaLink: string;
  embassyAddressOne: string;
  embassyAddressTwo: string;
  embassyAddresses: string[] = []
  selectedVisas: string[] = []
  selectedVisaReqs: string[] = []
  selectedRoutes: string[] = []

  constructor(
    private countryService: CountryService,
    private router: Router
  ) { }

  ngOnInit() {
    this.submitBtn = document.getElementById('submitBtn')
  }

  onSelect(_el, _item, _itemArray){
    let selected = false
    let visaId = document.getElementById(_item)
    let success = "#28a745"
    let normal = "#f2f2f2"

    for(let i = 0; i < _itemArray.length; i++){
      if(_itemArray[i] == _item){
        _itemArray.splice(i, 1)
        selected = true
      }
    }
    if(!selected){
      _itemArray.push(_item)
      visaId.style.backgroundColor = success
    }else {
      visaId.style.backgroundColor = normal
    }

    this.checkValidity(_el, _itemArray, 1);
    
  }

  ///Form validation methods

  dataExists(_data){
    if(_data){
      return true;
    }else{
      return false;
    }
  }

  dataHasCorrectLength(_data: any, _length: number){
    if(_data.length >= _length){
      return true;
    }else{
      return false;
    }
  }

  isvalid(_data: any, _length: number): number{
    if(this.dataExists(_data)){
      if(this.dataHasCorrectLength(_data, _length)){
        return 0;
      }else{
        return 1;
      }
    }else{
      return 2;
    }
  }

  onSubmit(){
    let status:boolean = true;
    let formData = [
      {
        el: 'countryname',
        data: this.countryname,
        len: 2
      },
      {
        el: 'visatypes',
        data: this.selectedVisas,
        len: 1
      },
      {
        el: 'visareqs',
        data: this.selectedVisaReqs,
        len: 1
      },
      {
        el: 'routes',
        data: this.selectedRoutes,
        len: 1
      },
      {
        el: 'flightfee',
        data: this.flightFee,
        len: 1
      },
      {
        el: 'addressone',
        data: this.embassyAddressOne,
        len: 10
      },
      // {
      //   el: 'addresstwo',
      //   data: this.embassyAddressTwo,
      //   len: 10
      // },
      {
        el: 'visalink',
        data: this.visaLink,
        len: 8
      },
    ]

    for (let index = 0; index < formData.length; index++) {
      if (!this.checkValidity(formData[index].el, formData[index].data, formData[index].len)) {
        status = false
      }
    }

    if(status){
      this.submitPaper()
    }else{
      this.buttonAnimFailed()
    }

  }

  submitPaper(){
    let form = {
      countryName: this.countryname,
      visaTypes: this.selectedVisas,
      visaRequirements: this.selectedVisaReqs,
      travelRoutes: this.selectedRoutes,
      averageFlightPrice: this.flightFee,
      address: this.embassyAddresses,
      applicationLink: this.visaLink
    }

    this.countryService.postCountry(form)
      .subscribe(data => {
        if(data.success == true){
          this.buttonAnimSuccess()
        }else{
          this.buttonAnimFailed()
        }
      })
  }

  checkValidity(_el, _data, _len){
    if(typeof(_data) === "number"){
      _data = _data.toString();
    }
    switch (this.isvalid(_data, _len)) {
      case 0:
        document.getElementById(_el).style.borderRight = '4px solid green'
        return true
      case 1:
        document.getElementById(_el).style.borderRight = '4px solid red'
        return false
      case 2:
        document.getElementById(_el).style.borderRight = '4px solid red'
        return false
    
      default:
        break;
    }
  }

  buttonAnimSuccess(){
    let animation = anime.timeline({})

    .add({
      targets: this.submitBtn,
      width: "250px",
      borderRadius: "0px",
      backgroundColor: "#4BB543",
      duration: 600,
      easing: 'cubicBezier('+this.pop+')'
    })

    animation.finished.then(()=>{
      this.router.navigate(['dashboard', 'countries']);
    })
  }

  buttonAnimFailed(){
    let animation = anime.timeline({})

    .add({
      targets: this.submitBtn,
      width: "250px",
      borderRadius: "0px",
      backgroundColor: "#dc3545",
      duration: 600,
      easing: 'cubicBezier('+this.pop+')'
    })
    .add({
      targets: this.submitBtn,
      width: "200px",
      borderRadius: "0px",
      backgroundColor: "#1f1e48",
      duration: 300,
      easing: 'cubicBezier('+this.pop+')'
    })
  }
}
