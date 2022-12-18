import { Component, OnInit, Input } from '@angular/core';
// import {Car} from '../models'
import { AddCarComponent } from '../add-car/add-car.component';
import { ActivatedRoute } from '@angular/router';
import {Student} from '../models'

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.css']
})
export class CarsComponent implements OnInit {

  // @Input() car:Car

  // constructor(){
  // }
  

  // ngOnInit(): void {
  
  // }

  // name = ''
  // primeName = ''
  // constructor(private route: ActivatedRoute){
  // }
  // ngOnInit(): void {
  //   this.route.params.subscribe((car) => {
  //     this.name = car['name']
  //   })
  //   this.route.queryParams.subscribe((car) => {
  //     this.primeName = car['primeName']
  //   })
  // }
  // @Input() student:Student
  // students: Student[] = [
  //   { id: 1, name: 'Ivan' },
  //   { id: 2, name: 'Bill' },
  //   { id: 3, name: 'John' },
  //   { id: 4, name: 'Petr' },
  // ]; name = ''
//   primeName = ''
//   constructor(private route: ActivatedRoute){
//   }
//   ngOnInit(): void {
//     this.route.params.subscribe((data) => {
//       this.name = data['name']
//     })
//     this.route.queryParams.subscribe((data) => {
//       this.primeName = data['primeName']
//     })
//   }
  
  

//   // constructor() { }

//   // ngOnInit(): void {
//   // }
// }
  
name = ''
primeName = ''
constructor(private route: ActivatedRoute){
}
ngOnInit(): void {
  this.route.params.subscribe((data) => {
    this.name = data['name']
  })
  this.route.queryParams.subscribe((data) => {
    this.primeName = data['primeName']
  })
}
}

