import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CreateformComponent } from './components/createform/createform.component';
import { CountriesComponent } from './components/countries/countries.component';
import { AuthGuard } from 'src/app/services/auth.guard';




const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
        // canActivate: [AuthGuard],
        children:[
            {
                path: "",
                redirectTo: "createform",
                pathMatch: "full"
            },
            {
                path: "createform",
                component: CreateformComponent
            },
            {
                path: "countries",
                component: CountriesComponent
            }
        ]
    }
    
]


@NgModule({
    imports:[
        RouterModule.forChild(routes)
    ],
    exports:[
        RouterModule
    ]
})

export class DashboardRoutingModule {}