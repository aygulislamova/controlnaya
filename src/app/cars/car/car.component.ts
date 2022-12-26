import { CarService } from './../../car.service';
import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/models';
@Component({
  selector: 'app-car',
  templateUrl: './car.component.html',
  styleUrls: ['./car.component.css']
})
export class CarComponent implements OnInit {
  date: string;
name = ''
id = ''
cars: string[] = []



  constructor(private carService: CarService) { }

  ngOnInit(): void {
    this.cars = this.carService.getCar()
  }

}
