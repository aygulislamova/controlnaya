import { NgSwitchCase } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title='control';
  isLoggedIn = false;
  username='';
  updateLoggedIn(){
    const userStr = localStorage.getItem('user')|| '';
    if (userStr){
    const user =JSON.parse( userStr);
    console.log(user);
    if (user){
      this.isLoggedIn= true;
    }
  }else{
    this.isLoggedIn = false;
  }
    
  }
  logout(){
      localStorage.clear();
      this.isLoggedIn = false;
  }
}

