import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { CarsComponent } from "./cars/cars.component";
import { CarComponent } from "./cars/car/car.component";
import { AddCarComponent } from "./add-car/add-car.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { NotFoundComponent } from "./not-found/not-found.component";

const routes:Routes = [
    {path:'', component:HomeComponent},
    {path:'cars', component:CarsComponent},
    {path:'car/:id', component:CarComponent},
    {path:'aboutme', component:AboutMeComponent},
    {path:'add', component: AddCarComponent},
    {path:'**', component:NotFoundComponent},

];

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
 export class AppRoutingModule{
 }