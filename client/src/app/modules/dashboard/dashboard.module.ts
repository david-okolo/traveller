import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { FormsModule } from '@angular/forms';

import { DashboardComponent } from './dashboard.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { CreateformComponent } from './components/createform/createform.component';
import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        DashboardComponent,
        CreateformComponent,
        NavbarComponent
    ],
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        DashboardRoutingModule
    ],
    providers: [
        
    ]
})

export class DashboardModule {}