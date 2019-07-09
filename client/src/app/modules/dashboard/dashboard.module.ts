import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateformComponent } from './components/createform/createform.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CountriesComponent } from './components/countries/countries.component';
import { CountryService } from './services/country.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
    declarations: [
        DashboardComponent,
        CreateformComponent,
        NavbarComponent,
        CountriesComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        DashboardRoutingModule,
        HttpClientModule
    ],
    providers: [
        CountryService
    ]
})

export class DashboardModule {}