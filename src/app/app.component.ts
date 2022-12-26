import { Component } from '@angular/core';
import { Router } from "@angular/router";
import { CarService } from "./car.service";
import { Car } from './models';

import { FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='control';
   cars: string[] = []
   profile = {
     firstName: "",
   }

   profileForm = new FormGroup({
     brend: new FormControl(this.profile.firstName, Validators.required),
     model: new FormControl("", [
       Validators.required,
       Validators.minLength(5)
     ]),
     price: new FormControl('',[
      Validators.required
     ])

   })

   constructor(
     private dataService: CarService,
     private router: Router){
     this.cars = dataService.getCar()
   }
   onSubmit() {
     const brend = this.profileForm.value.brend
     if (brend){
       this.dataService.addCar(brend)
       this.cars = this.dataService.getCar()
       this.router.navigate(['user', brend])
     }
   }
 }




