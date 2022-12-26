// import { Component, OnInit} from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from "@angular/router";
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CarService } from './../car.service';


export interface Car {
  id: number;
  brend: string;
  model: string;
  price: number
}
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  car:Car= {
    brend: '',
    model: '',
    id:0,
    price: 0
  };
  constructor(private carService: CarService) {
    
  }

  ngOnInit(): void {
  }


  onSubmit(){
    this.carService.addCar(this.car.brend)
    
  
    
  }


}
