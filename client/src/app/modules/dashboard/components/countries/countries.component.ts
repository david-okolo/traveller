import { Component, OnInit } from '@angular/core';
import { CountryService } from '../../services/country.service';

@Component({
  selector: 'app-countries',
  templateUrl: './countries.component.html',
  styleUrls: ['./countries.component.sass']
})
export class CountriesComponent implements OnInit {

  researchList;

  constructor(
    private countryService: CountryService
  ) { }

  ngOnInit() {
    this.getCountries()
  }

  getCountries(){
    this.countryService.getCountries()
    .subscribe(data => {
      if(data.success){
        this.researchList = data.researchList;
      }
    })
  }

  deleteResearch(_id){
    let body = {
      id: _id
    }
    this.countryService.deleteCountry(body)
    .subscribe(data => {
      if(data.success){
        console.log(data)
        this.getCountries()
      }
    })
  }

}
