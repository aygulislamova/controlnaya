import { Component, OnInit } from '@angular/core';
import { Data } from '@angular/router';

export interface UserRegisterDto{
  email: string;
  password: string;
  name:string;
  surname:string;
  patronymic?: string;
  passwordConfirm: string;
  data:string;
  sex:string;
}

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user:UserRegisterDto ={
    patronymic:'',
     surname:'', name:'',
      email:'',
     password:'',
     passwordConfirm:'',
     data:'',
     sex:'',
    } ;
  
  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(){
    console.log(this.user);
  }

  }
