import { Injectable } from '@angular/core';
import { Car } from './models';

@Injectable()
export class CarService {
  car = ["bmw", "bmw2"]
  
  constructor() { }
  getCar(){
    return [...this.car]
  }
  addCar(brend: string, ) {
    this.car.push(brend)
   
  }
}

