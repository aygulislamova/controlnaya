// import { Component, OnInit} from '@angular/core';
// import { FormControl, FormGroup, Validators } from '@angular/forms';
// import { Router } from "@angular/router";
import { Component, EventEmitter, OnInit, Output } from '@angular/core';

// export interface Car {
//   id: number;
//   brend: string;
//   model: string;
//   price: number
// }
@Component({
  selector: 'app-add-car',
  templateUrl: './add-car.component.html',
  styleUrls: ['./add-car.component.css']
})
export class AddCarComponent implements OnInit {
  // car:Car= {
  //   // id: '',
  //   brend: '',
  //   model: '',
  //   id: 0,
  //   price: 0
  // };
  @Output() outEnterName = new EventEmitter<string>();
  constructor() {}

  ngOnInit(): void {
  }
  
  enterName(nameInput: HTMLInputElement) {
    this.outEnterName.emit(nameInput.value);
    nameInput.value = '';
  }
 

}
