// import { Injectable } from '@angular/core';

// @Injectable({
//   providedIn: 'root'
// })
// export class CarService {
//  car = []

// }


import { Injectable } from '@angular/core';

@Injectable()
export class CarService {
  data = ["Tom", "Bob"]
  constructor() { }
  getData(){
    return [...this.data]
  }
  addData(name: string) {
    this.data.push(name)
  }
}

