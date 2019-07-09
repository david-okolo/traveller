import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { CreateformComponent } from './components/createform/createform.component';
import { NavbarComponent } from './components/navbar/navbar.component';




const routes: Routes = [
    {
        path: "dashboard",
        component: DashboardComponent,
    },
    {
        path: "createform",
        component: CreateformComponent,
    },
    {
        path: "navbar",
        component: NavbarComponent,
        outlet: "main"
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