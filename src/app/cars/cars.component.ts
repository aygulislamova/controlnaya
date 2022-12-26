import { CarService } from './../car.service';
import { Component, OnInit, Input } from '@angular/core';
// import {Car} from '../models'
import { AddCarComponent } from '../add-car/add-car.component';
import { ActivatedRoute } from '@angular/router';
import {Car} from '../models'


@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

date: string;
name = ''
id = ''
cars: string[] = []
constructor(private route: ActivatedRoute, private carService: CarService){
}
ngOnInit(): void {

  this.cars = this.carService.getCar()
}
}

